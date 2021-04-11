import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

import {
  Container,
  Landing,
  Content,
  Title,
  CardContainer,
} from "../styles/pages/home.styles";

export default function Signin() {
  const [session, loading] = useSession();

  const router = useRouter();

  return (
    <>
      {session && router.push('/')}
      <Head>
        <title>Entrar</title>
      </Head>
      <h1> asahsuahsauh </h1>
    </>
  );
}
