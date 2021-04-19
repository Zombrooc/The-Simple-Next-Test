import React from "react";
import Head from "next/head";
import Link from "next/link";
import { providers, signIn, getCsrfToken } from "next-auth/client";

import {
  Container,
  CenterBox,
  Title,
} from "../../styles/pages/auth/signin.styles";

export default function SignIn({ csrfToken, providers }) {
  return (
    <Container>
      <Head>
        <title> The Simple - Entrar </title>
      </Head>
      <CenterBox>
        <Title>
          <Link href="/">
            <a>
              <p className="glitch">
                The Simple <span>TECH</span>
              </p>
              <p className="glitch">
                The Simple <span>TECH</span>
              </p>
              <p className="glitch">
                The Simple <span>TECH</span>
              </p>
            </a>
          </Link>
        </Title>
        <span> Entrar </span>
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            E-mail
            <input name="email" type="email" />
          </label>
          <label>
            Senha
            <input name="password" type="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <div className="signupOption">
          Não tem uma conta?
          <Link href="/auth/signup">
            <a>Registre-se</a>
          </Link>
        </div>
        <hr />
        {Object.values(providers)
          .filter((provider) => (provider.name === "Google" ? true : false))
          .map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Entrar com {provider.name}
              </button>
            </div>
          ))}
      </CenterBox>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers: await providers(),
    },
  };
}
