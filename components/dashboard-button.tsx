import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginButton from "./login-button";

export default function DashboardButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <button onClick={() => router.push("/dashboard")}>
        Check your links
      </button>
    );
  }

  return <LoginButton />;
}
