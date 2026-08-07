# Payment Tracker Setup — Step by Step

This sets up a password-protected page at `/admin/payments` that shows a
live table of student payments, pulled from a Google Sheet you control.
Only someone who knows the password can see it.

There are four parts. Do them in order.

---

## Part 1 — Create the Google Sheet

1. Go to `https://sheets.google.com` and click the big **"+ Blank"** button
   to create a new spreadsheet.
2. Name it whatever you like (e.g. "RH Budokan Payments") by clicking
   "Untitled spreadsheet" in the top-left and typing a new name.
3. At the bottom of the screen, there's a tab currently called
   **"Sheet1"**. Double-click it and rename it to exactly: `Payments`
   (capital P, no extra spaces — the website code looks for this exact
   name).
4. In row 1, type these four column headers, one per cell, left to right
   starting in cell A1:
   - A1: `Student Name`
   - B1: `Program`
   - C1: `Monthly Amount`
   - D1: `Last Paid`
5. Starting in row 2, add one row per student. Example:
   - A2: `Jane Smith`, B2: `Kitsune Ryu Jiu-Jitsu`, C2: `$120`,
     D2: `2026-07-05`
   - Keep the "Last Paid" column in `YYYY-MM-DD` format (year-month-day)
     so the website can read it correctly.
6. Whenever a student e-transfers their payment, come back here and update
   their "Last Paid" date. That's the entire ongoing workflow — the
   website reads this sheet live every time the page loads.
7. Look at your browser's address bar. The URL looks like:
   `https://docs.google.com/spreadsheets/d/`**`1AbC-longRandomId_Here`**`/edit`
   Copy that long ID part (between `/d/` and `/edit`) — you'll need it in
   Part 3. This is your **Sheet ID**.

---

## Part 2 — Create a Google service account (lets the website read the sheet)

A "service account" is a robot Google account just for this website to use
— it's not your personal Google login.

1. Go to `https://console.cloud.google.com/`
2. If asked to agree to terms, accept them.
3. Near the top of the page, click the project dropdown (it may say
   "Select a project" or show an existing project name).
4. Click **"New Project"** in the dialog that opens.
5. Name it something like `rhbudokan-website`, leave everything else
   default, and click **"Create"**. Wait a few seconds, then make sure
   this new project is selected in that same dropdown at the top.
6. In the search bar at the very top of the page, type: `Google Sheets API`
   and click on the result named **"Google Sheets API"**.
7. Click the blue **"Enable"** button.
8. In the left sidebar (you may need to click the ☰ menu icon to reveal
   it), go to **"APIs & Services" → "Credentials"**.
9. Click **"+ Create Credentials"** near the top, then choose
   **"Service account"** from the dropdown.
10. Give it a name, e.g. `rhbudokan-sheets-reader`. Click **"Create and
    continue"**.
11. On the next screen ("Grant this service account access to project"),
    you can leave the role blank/skip it — click **"Continue"**, then
    **"Done"**.
12. You'll land back on the Credentials page. Under "Service Accounts,"
    click the email address you just created (it looks like
    `rhbudokan-sheets-reader@rhbudokan-website.iam.gserviceaccount.com`).
13. **Copy that email address somewhere** — you'll need it in the next
    step and again in Part 3.
14. Click the **"Keys"** tab (near the top of this service account's
    page).
15. Click **"Add Key" → "Create new key"**.
16. Choose **"JSON"** and click **"Create"**. A `.json` file will download
    to your computer automatically. **Keep this file safe and don't share
    it publicly** — it's the credential that lets the website read your
    sheet.
17. Open that downloaded JSON file in any text editor (TextEdit works).
    Inside, you'll see fields called `"client_email"` and
    `"private_key"`. You'll copy both of these into Vercel in Part 3.

---

## Part 3 — Share the sheet, deploy to Vercel, set environment variables

### 3a. Share the Google Sheet with the service account

1. Go back to your Google Sheet from Part 1.
2. Click the green **"Share"** button, top-right.
3. Paste in the service account email you copied in Part 2, step 13
   (looks like `...iam.gserviceaccount.com`).
4. Make sure its permission is set to **"Viewer"** (reading is all it
   needs).
5. Click **"Send"** (it's fine that it's a robot account — it won't get a
   real email, sharing still works).

### 3b. Connect the project to Vercel

1. Go to `https://vercel.com/signup` and sign up using **"Continue with
   GitHub"** — this links Vercel directly to your GitHub account.
2. Once logged in, click **"Add New..." → "Project"**.
3. Find `Richmond-Hill-Budokan` in the list of your GitHub repos and click
   **"Import"** next to it.
4. Vercel will auto-detect this as a Next.js project — leave all the
   build settings on their defaults.
5. **Before clicking Deploy**, expand the **"Environment Variables"**
   section on this same screen. Add each of these one at a time (Name on
   the left, Value on the right, then click "Add" for each):

   | Name | Value |
   |---|---|
   | `ADMIN_PASSWORD` | Any password you choose — this is what sensei types in |
   | `SESSION_SECRET` | Any long random text (mash the keyboard, or see note below) |
   | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The `client_email` value from the JSON file (Part 2, step 17) |
   | `GOOGLE_PRIVATE_KEY` | The entire `private_key` value from the JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines |
   | `PAYMENTS_SHEET_ID` | The Sheet ID you copied in Part 1, step 7 |

   For `SESSION_SECRET`, if you have Terminal open, running
   `openssl rand -hex 32` will print a good random value you can paste in.

6. Click the big **"Deploy"** button. Wait a minute or two while Vercel
   builds the site.
7. Once it finishes, Vercel gives you a live URL like
   `https://richmond-hill-budokan.vercel.app` — that's your new home for
   the whole site (this replaces the GitHub Pages link). Test it by
   visiting `/admin/login` on that URL and entering the password you set.

From now on, every time you `git push`, Vercel automatically rebuilds and
redeploys — same as GitHub Pages did, just with real server support this
time.

### 3c. Turn off the old GitHub Pages hosting (optional cleanup)

Since the site now lives on Vercel, you can turn off GitHub Pages: go to
`https://github.com/aryan1968/Richmond-Hill-Budokan/settings/pages` and
change Source back to **"None."**

---

## Part 4 — Local testing (optional, for previewing before you push)

1. In the project folder, copy `.env.example` to a new file named
   `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` in a text editor and fill in the same five values you
   set in Vercel (Part 3b, step 5).
3. Run the dev server as usual:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000/admin/login` and log in with your
   `ADMIN_PASSWORD`.

`.env.local` is already excluded from git (see `.gitignore`), so your real
password and keys never get committed or pushed.

---

## Notes

- The `/admin/payments` page is intentionally **not linked anywhere in the
  site's navigation** — it's only reachable if you know the direct URL.
  That's an extra layer of obscurity on top of the password, not a
  replacement for it.
- "Overdue" is calculated automatically: any student whose "Last Paid"
  date is more than 31 days ago shows as Overdue. Just keep the sheet
  updated and the page does the rest.
- If the page shows an error instead of the table, it's almost always one
  of: the sheet isn't shared with the service account email, an
  environment variable has a typo, or the tab isn't named exactly
  `Payments`.
