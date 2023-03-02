import { useRouter } from "next/router";
import useSWR from "swr";
import { signOut, useSession } from "next-auth/react";
import LinkTable from "@/components/link-table";
import Link from "next/link";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = useSession();
  const { data, error } = useSWR(session ? `/api/links` : null, fetcher);

  if (session) {
    return (
      <>
        <nav className="w-full bg-white px-4 h-14 flex justify-between text-black items-center">
          <Link href="/">Home</Link>
          <button
            onClick={() => signOut().then(() => router.push("/"))}
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
        </nav>
        <main>
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome {session.user.name}
          </h1>

          {data && <LinkTable links={data} />}
        </main>
      </>
    );
  }

  return (
    <main>
      <div className="text-center m-auto">
        <h1 className="text-4xl font-bold pb-4">You are not logged in</h1>
        <Link href="/" className="p-2 bg-primary rounded-xl">
          Return to the Home
        </Link>
      </div>
    </main>
  );
}
