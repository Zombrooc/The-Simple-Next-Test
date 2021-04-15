// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   pages: {
//     signIn: "/auth/signin",
//   },
//   secret: process.env.SECRET,
//   session: {
//     jwt: true,
//     maxAge: 30 * 24 * 60 * 60,
//     updateAge: 24 * 60 * 60, // 24 hours
//   },
//   jwt: {
//     secret: process.env.SECRET,
//   },
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "E-mail",
//           type: "email",
//           placeholder: "Digite seu e-mail",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = async (credentials) => {
//           const { email, password } = credentials;

//           // const db = await connectToDatabase();

//           // const collection = db.collection('users')

//           // const user = await collection.find({ email: email });

//           // console.log(user);

//           // if (!user) {
//           //   return null
//           // }

//           return { name: 'Elian Valdez', email: 'elian.valdez09@gmail.com'};
//         };
//         console.log(user);
//         if (user) {
//           // Any user object returned here will be saved in the JSON Web Token
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   database: process.env.MONGO_URL,
// });

import NextAuth from "next-auth";
import Provider from "next-auth/providers";
const { compareSync } = require("bcryptjs");

import { connectToDatabase } from "../../../middleware/database";

const options = {
  callbacks: {
    async signIn(user, account, profile) {
      let isAllowedToSignIn = true;

      if (!(await compareSync(profile.password, user.password))) {
        isAllowedToSignIn = false;
      }

      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
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
      authorize(credentials) {
        const user = async (credentials) => {
          const db = await connectToDatabase();

          const collection = db.collection("users");

          const user = await collection.findOne({ email: credentials.email });

          return user;
        };

        if (user(credentials)) {
          return user(credentials);
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  }
};

export default (req, res) => NextAuth(req, res, options);
