import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        className="w-20 h-10 bg-secondary font-bold rounded-xl"
        onClick={() => signOut()}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      className="p-2 h-10 bg-primary rounded-xl"
      onClick={() => signIn()}
    >
      Login to see all your links
    </button>
  );
}
