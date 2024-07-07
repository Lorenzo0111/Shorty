import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function Slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const ref = headers().get("Referer");

  const url = await prisma.shortUrl.update({
    where: {
      shortCode: slug,
    },
    data: {
      hits: {
        increment: 1,
      },
      refs: ref
        ? {
            push: new URL(ref).hostname,
          }
        : undefined,
    },
  });

  if (url) redirect(url.url);
  else return notFound();
}
