import { auth } from "@/lib/auth";
import Link from "next/link";
import LoginButton from "./login-button";

export default async function DashboardButton() {
  const session = await auth();

  if (session) {
    return <Link href="/dashboard">Check your links</Link>;
  }

  return <LoginButton />;
}
