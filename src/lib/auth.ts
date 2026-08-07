// Simple shared-password session auth for the /admin section.
// No user accounts, no database — just a single password (ADMIN_PASSWORD)
// and a signed, expiring session cookie. Good enough for "only sensei needs
// to get in," not meant for anything beyond that.

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
export const SESSION_COOKIE_NAME = "admin_session";

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET environment variable is not set. See docs/PAYMENT-TRACKER-SETUP.md."
    );
  }
  return secret;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Plain-string constant-time-ish compare — avoids leaking password length/
// content via response-time differences. Not cryptographic-grade, but fine
// for a low-stakes single shared password behind HTTPS.
export function constantTimeEqual(a: string, b: string): boolean {
  const maxLen = Math.max(a.length, b.length, 1);
  let diff = a.length === b.length ? 0 : 1;
  for (let i = 0; i < maxLen; i++) {
    const charA = a.charCodeAt(i % a.length || 0) || 0;
    const charB = b.charCodeAt(i % b.length || 0) || 0;
    diff |= charA ^ charB;
  }
  return diff === 0 && a.length === b.length;
}

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${expires}`;
  const signature = await hmacHex(getSecret(), payload);
  return `${payload}.${signature}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = await hmacHex(getSecret(), payload);
  if (!constantTimeEqual(signature, expected)) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  return true;
}
