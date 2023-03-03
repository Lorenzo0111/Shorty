import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-3/4 mx-auto h-14 flex justify-between items-center">
      <Link href="/" className="flex text-center items-center gap-2">
        <FontAwesomeIcon icon={faHouse} /> Home
      </Link>
      {session && (
        <button
          onClick={() => router.push("/dashboard")}
          className="flex gap-2 items-center justify-center"
        >
          <Image
            className="rounded-full"
            src={session?.user?.image || ""}
            alt="propic"
            width={30}
            height={30}
          />
          {session?.user?.name}
        </button>
      )}
      {!session && (
        <button
          onClick={() => signIn("discord")}
          className="flex gap-2 items-center justify-center"
        >
          Login
        </button>
      )}
    </nav>
  );
}
