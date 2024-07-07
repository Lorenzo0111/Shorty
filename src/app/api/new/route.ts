import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const isUrl = (urlString: string) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlPattern.test(urlString);
};

export const POST = auth(async (req) => {
  if (!req.auth?.user)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  if (!body.url || !isUrl(body.url))
    return NextResponse.json(
      { error: "Missing or invalid URL" },
      { status: 400 }
    );

  if (body.slug) {
    const slugExists = await prisma.shortUrl.findFirst({
      where: {
        shortCode: body.slug,
      },
    });

    if (slugExists) return NextResponse.json({ error: "Slug already exists" });
  }

  const slug = body.slug ?? Math.random().toString(36).substring(2, 8);

  const shortUrl = await prisma.shortUrl.create({
    data: {
      url: body.url,
      ownerId: req.auth.user.id,
      shortCode: slug,
    },
  });

  return NextResponse.json(shortUrl);
});
