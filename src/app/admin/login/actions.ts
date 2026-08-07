"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE_NAME,
  constantTimeEqual,
  createSessionToken,
} from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const submitted = formData.get("password")?.toString() ?? "";
  const correct = process.env.ADMIN_PASSWORD ?? "";

  const ok = correct.length > 0 && constantTimeEqual(submitted, correct);
  if (!ok) {
    redirect("/admin/login?error=1");
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  redirect("/admin/payments");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}
