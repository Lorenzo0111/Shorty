import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = auth(async (req) => {
  if (!req.auth?.user)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const urls = await prisma.shortUrl.findMany({
    where: {
      ownerId: req.auth.user.id,
    },
  });

  return NextResponse.json(urls);
});
