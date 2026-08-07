import { loginAction } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="min-h-[100svh] bg-sumi flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-bright mb-4 text-center">
          Sensei Area
        </p>
        <h1 className="font-display text-3xl text-washi text-center mb-8">
          Payment Tracker
        </h1>

        <form action={loginAction} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="password"
              className="block font-mono text-xs uppercase tracking-widest text-brass-bright mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full bg-transparent border-b border-white/25 py-3 font-body text-washi outline-none focus:border-hanko-bright transition-colors"
            />
          </div>

          {error && (
            <p className="text-hanko-bright text-sm font-body">
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-2 bg-hanko-bright text-sumi font-body font-medium px-7 py-4 uppercase tracking-wide text-sm hover:bg-brass-bright transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}
