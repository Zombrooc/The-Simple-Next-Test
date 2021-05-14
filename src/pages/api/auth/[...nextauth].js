import NextAuth from "next-auth";
import Provider from "next-auth/providers";
const { compareSync } = require("bcryptjs");

import { connectToDatabase } from "../../../middleware/database";

const options = {
  callbacks: {
    async signIn(user, account, profile) {
      let isAllowedToSignIn = true;

      if (
        account.provider === "google" &&
        profile.verified_email === true &&
        profile.email.endsWith("@gmail.com")
      ) {
        return true;
      }

      if (!(await compareSync(profile.password, user.password))) {
        return false;
      }

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  providers: [
    Provider.Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Digite seu e-mail",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = async (credentials) => {
            const db = await connectToDatabase();

            const collection = db.collection("users");

            const user = await collection.findOne({ email: credentials.email });

            return user;
          };

          const userToBeLogged = user(credentials);

          if (userToBeLogged) {
            return userToBeLogged;
          }
        } catch (e) {
          const errorMessage = e.response.data.message;
          
          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
    Provider.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
