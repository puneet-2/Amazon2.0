import NextAuth from "next-auth";
import { Session } from "next-auth";
import { Auth } from "next-auth";;
import GoogleProvider from "next-auth/providers/google";
export const authOptions ={

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  NEXT_PUBLIC_SECRET:{
  secret: process.env.NEXT_PUBLIC_SECRET,
  }
}
export default NextAuth(authOptions);