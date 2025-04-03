import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    };
    expires: string;
  }
}

const handler = NextAuth({
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        url: 'https://accounts.google.com/o/oauth2/auth',
        params: {
          response_type: 'code',
          client_id: process.env.GOOGLE_CLIENT_ID,
          redirect_uri: 'http://localhost:3000/login/oauth2/code/google',
          scope: 'openid email profile',
        },
      },
    }),
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
    Naver({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && token.sub && session && session.user && typeof token.sub === 'string') {
        console.log('token:', token);
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST };
