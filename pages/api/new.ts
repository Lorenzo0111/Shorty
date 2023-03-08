import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "prismadb";

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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!req.body.url || !isUrl(req.body.url)) {
    res.status(400).json({ error: "Missing or invalid URL" });
    return;
  }

  if (req.body.slug) {
    const slugExists = await prisma.shortUrl.findFirst({
      where: {
        shortCode: req.body.slug,
      },
    });

    if (slugExists) {
      res.json({ error: "Slug already exists" });
      return;
    }
  }

  const slug = req.body.slug ?? Math.random().toString(36).substring(2, 8);
  const shortUrl = await prisma.shortUrl.create({
    data: {
      url: req.body.url,
      ownerId: session?.user?.id,
      shortCode: slug,
    },
  });

  res.status(200).json(shortUrl);
};
