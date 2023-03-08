import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "prismadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (!slug || slug === "undefined")
    return res.status(400).json({ url: null });

  const link = await prisma.shortUrl.update({
    where: {
      shortCode: slug as string,
    },
    data: {
      hits: {
        increment: 1,
      },
    },
    select: {
      url: true,
      ownerId: true,
    },
  });

  switch (req.method) {
    case "GET":
      if (link) {
        res.json(link);
        return;
      }

      res.status(404).json({ message: "Not found" });
      return;
    case "DELETE":
      const session = await getServerSession(req, res, authOptions);
      if (!session || session.user.id !== link.ownerId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      await prisma.shortUrl.delete({
        where: {
          shortCode: slug as string,
        },
      });
      res.status(204).end();
      return;
    default:
      res.status(405).end();
      return;
  }
};
