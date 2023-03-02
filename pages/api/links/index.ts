import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        res.status(401).json({ message: "Unauthorized" })
        return
    }

    const links = await prisma.shortUrl.findMany({
        where: {
            owner: session.user.id
        }
    })

    res.json(links)
}