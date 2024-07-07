import Navbar from "@/components/navbar";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const url = await prisma.shortUrl.findUnique({
    where: {
      shortCode: slug,
    },
  });

  if (url)
    return (
      <main className="flex flex-col h-full">
        <Navbar />

        <p className="m-auto">
          The link navigates to{" "}
          <Link href={url.url} className="text-primary">
            {url.url}
          </Link>
        </p>
      </main>
    );

  return notFound();
}
