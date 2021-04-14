// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import jwt from "next-auth/jwt";

// // import { connectToDatabase } from "../../../middleware/database";

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

const options = {
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Provider.Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Digite seu e-mail",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const user = {
          id: 1,
          name: "Elian Valdez",
          email: "elian.valdez09@gmail.com",
        };

        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
