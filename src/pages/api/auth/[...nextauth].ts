import NextAuth, { type NextAuthOptions } from 'next-auth';

export const config = {
  runtime: 'nodejs',
};

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

  providers: [],
};

export default NextAuth(authOptions);
