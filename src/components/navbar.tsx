import { auth, signIn } from "@/lib/auth";
import { House } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="w-3/4 mx-auto h-14 flex justify-between items-center">
      <Link href="/" className="flex text-center items-center gap-2">
        <House /> Home
      </Link>
      {session && (
        <Link
          href="/dashboard"
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
        </Link>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";

            await signIn("discord");
            revalidatePath("/");
            return redirect("/");
          }}
        >
          <Button type="submit">Login</Button>
        </form>
      )}
    </nav>
  );
}
