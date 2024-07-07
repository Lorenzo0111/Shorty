import prisma from "@/src/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, token, user }) {
      if (session?.user) session.user.id = user.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
