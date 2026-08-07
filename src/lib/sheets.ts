import { google } from "googleapis";

export type PaymentStatus = "paid" | "overdue" | "unknown";

export type PaymentRow = {
  name: string;
  program: string;
  amount: string;
  lastPaid: string;
  status: PaymentStatus;
};

// How many days after the last payment before a student counts as overdue.
// 31 covers a monthly billing cycle with a few days' grace.
const OVERDUE_AFTER_DAYS = 31;

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) {
    throw new Error(
      "GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY are not configured. See docs/PAYMENT-TRACKER-SETUP.md."
    );
  }
  // Vercel env vars store literal "\n" for multi-line values — convert back
  // to real newlines for the private key to parse correctly.
  const key = rawKey.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
}

function computeStatus(lastPaidRaw: string): PaymentStatus {
  if (!lastPaidRaw) return "unknown";
  const lastPaid = new Date(lastPaidRaw);
  if (Number.isNaN(lastPaid.getTime())) return "unknown";

  const daysSince = (Date.now() - lastPaid.getTime()) / (1000 * 60 * 60 * 24);
  return daysSince > OVERDUE_AFTER_DAYS ? "overdue" : "paid";
}

// Expected sheet layout — tab named "Payments", header row in row 1:
// A: Student Name | B: Program | C: Monthly Amount | D: Last Paid (YYYY-MM-DD)
export async function getPaymentRows(): Promise<PaymentRow[]> {
  const sheetId = process.env.PAYMENTS_SHEET_ID;
  if (!sheetId) {
    throw new Error(
      "PAYMENTS_SHEET_ID environment variable is not set. See docs/PAYMENT-TRACKER-SETUP.md."
    );
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Payments!A2:D",
  });

  const rows = res.data.values ?? [];

  return rows
    .filter((row) => row.some((cell) => String(cell ?? "").trim() !== ""))
    .map((row) => {
      const [name = "", program = "", amount = "", lastPaid = ""] = row;
      return {
        name: String(name),
        program: String(program),
        amount: String(amount),
        lastPaid: String(lastPaid),
        status: computeStatus(String(lastPaid)),
      };
    });
}
