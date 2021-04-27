import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { providers, signIn, getCsrfToken } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";

import {
  Container,
  CenterBox,
  Title,
} from "../../styles/pages/auth/signin.styles";

export default function SignIn({ csrfToken, providers }) {
  const router = useRouter();

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
        {router.query.error && (
          <div
            style={{
              width: "100%",
              padding: "25px",
              textAlign: "center",
              background: "var(--color-danger)",
              color: "var(--color-light)",
              borderRadius: "7px",
              marginBottom: '25px',
            }}
          >
            Email ou senha incorreta. Por favor, tente novamente
          </div>
        )}
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            E-mail
            <input name="email" type="email" required />
          </label>
          <label>
            Senha
            <input name="password" type="password" minLength="8" required />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <div className="signupOption">
          Não tem uma conta?
          <Link href="/auth/signup">
            <a>Registre-se</a>
          </Link>
        </div>
        <br />
        <hr style={{ width: "100%" }} />
        <br />
        {Object.values(providers)
          .filter((provider) => (provider.name === "Google" ? true : false))
          .map((provider) => (
            <div key={provider.name} style={{ width: "100%" }}>
              <button
                onClick={() => signIn(provider.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FcGoogle style={{ fontSize: "20px" }} />      Entrar com{" "}
                {provider.name}
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
