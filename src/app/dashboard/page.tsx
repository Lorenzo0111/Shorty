import LinkTable from "@/components/link-table";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function fetchLinks(userId: string) {
  return await prisma.shortUrl.findMany({
    where: {
      ownerId: userId,
    },
  });
}

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user)
    return (
      <main>
        <div className="text-center m-auto">
          <h1 className="text-4xl font-bold pb-4">You are not logged in</h1>
          <Button asChild>
            <Link href="/">Return to the Home</Link>
          </Button>
        </div>
      </main>
    );

  const links = await fetchLinks(session.user.id);

  return (
    <main>
      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome {session.user?.name}
      </h1>

      <LinkTable links={links} />
    </main>
  );
}
