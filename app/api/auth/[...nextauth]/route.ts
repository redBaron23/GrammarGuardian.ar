import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import Environment from "@/constants/Environment";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: Environment.GOOGLE_CLIENT_ID,
      clientSecret: Environment.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
  secret: Environment.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
