import { getPaymentRows } from "@/lib/sheets";
import { logoutAction } from "../login/actions";

// Always fetch live from the sheet — never cache this page.
export const dynamic = "force-dynamic";

function StatusBadge({ status }: { status: "paid" | "overdue" | "unknown" }) {
  const styles = {
    paid: "bg-green-900/40 text-green-300 border-green-700/50",
    overdue: "bg-hanko/30 text-hanko-bright border-hanko/60",
    unknown: "bg-white/5 text-washi-dim border-white/15",
  } as const;
  const labels = { paid: "Paid", overdue: "Overdue", unknown: "Unknown" } as const;

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wide border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export default async function AdminPaymentsPage() {
  let rows: Awaited<ReturnType<typeof getPaymentRows>> = [];
  let error: string | null = null;

  try {
    rows = await getPaymentRows();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load payment data.";
  }

  const overdueCount = rows.filter((r) => r.status === "overdue").length;

  return (
    <main className="min-h-[100svh] bg-sumi px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-2">
              Sensei Area
            </p>
            <h1 className="font-display text-3xl text-washi">Payment Tracker</h1>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="border border-white/20 text-washi-dim px-5 py-2.5 text-sm uppercase tracking-wide hover:border-hanko-bright hover:text-hanko-bright transition-colors font-body"
            >
              Log out
            </button>
          </form>
        </div>

        {error && (
          <div className="border border-hanko/50 bg-hanko/10 text-washi p-6 mb-8">
            <p className="font-body">
              Couldn&apos;t load data from the sheet: {error}
            </p>
            <p className="font-body text-washi-dim text-sm mt-2">
              Double-check the environment variables in Vercel and that the
              sheet is shared with the service account — see
              docs/PAYMENT-TRACKER-SETUP.md.
            </p>
          </div>
        )}

        {!error && rows.length === 0 && (
          <p className="font-body text-washi-dim">
            No rows found yet. Add students to the &quot;Payments&quot; tab of
            the Google Sheet.
          </p>
        )}

        {!error && rows.length > 0 && (
          <>
            {overdueCount > 0 && (
              <p className="font-body text-hanko-bright mb-6">
                {overdueCount} student{overdueCount > 1 ? "s" : ""} overdue.
              </p>
            )}

            <div className="border border-white/10 overflow-x-auto">
              <table className="w-full text-left font-body">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-brass-bright">
                    <th className="p-4">Student</th>
                    <th className="p-4">Program</th>
                    <th className="p-4">Monthly Amount</th>
                    <th className="p-4">Last Paid</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={`${row.name}-${i}`}
                      className={`border-b border-white/5 last:border-b-0 ${
                        row.status === "overdue" ? "bg-hanko/5" : ""
                      }`}
                    >
                      <td className="p-4 text-washi">{row.name}</td>
                      <td className="p-4 text-washi-dim">{row.program}</td>
                      <td className="p-4 text-washi-dim">{row.amount}</td>
                      <td className="p-4 text-washi-dim">{row.lastPaid}</td>
                      <td className="p-4">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <p className="font-body text-washi-dim/50 text-xs mt-10">
          Data pulled live from the connected Google Sheet. Update the sheet
          whenever a student pays — this page always reflects the sheet
          directly.
        </p>
      </div>
    </main>
  );
}
