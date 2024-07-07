import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function Slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const url = await prisma.shortUrl.update({
    where: {
      shortCode: slug,
    },
    data: {
      hits: {
        increment: 1,
      },
    },
  });

  if (url) redirect(url.url);
  else return notFound();
}
