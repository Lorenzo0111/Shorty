import useSWR from "swr";
import { useSession } from "next-auth/react";
import LinkTable from "@/components/link-table";
import Link from "next/link";
import Navbar from "@/components/navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dashboard() {
  const { data: session } = useSession();
  const { data, error } = useSWR(session ? `/api/links` : null, fetcher);

  if (session) {
    return (
      <>
        <main>
          <Navbar />

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
