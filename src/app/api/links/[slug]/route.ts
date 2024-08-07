import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const DELETE = auth(async (req, { params }) => {
  const { slug } = params as { slug: string };
  if (!req.auth?.user)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const link = await prisma.shortUrl.delete({
    where: {
      shortCode: slug,
      ownerId: req.auth.user.id,
    },
  });

  return NextResponse.json({ success: !!link });
});
