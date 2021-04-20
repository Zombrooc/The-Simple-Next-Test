import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { providers, signIn, getCsrfToken } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";
import axios from "axios";

import {
  Container,
  CenterBox,
  Title,
  ErrorBox,
} from "../../styles/pages/auth/signup.styles";

const errors = {
  409: `Já existe um usuário cadastrado com esse e-mail.`,
  1: "As senhas digitadas não combinam",
};

export default function SignUp({ csrfToken, providers }) {
  const router = useRouter();

  const [errorStatus, setErrorStatus] = useState();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!(inputData.password === inputData.confirm_password)) {
      setErrorStatus(1);
      setInputData({
        ...inputData,
        password: "",
        confirm_password: "",
      });
    } else {
      axios
        .post("/api/auth/signup", inputData)
        .then((response) => {
          if (response.status === 201) {
            router.push("/auth/signin");
          }
        })
        .catch((error) => {
          setErrorStatus(error.response.status);

          if (error.response.status === 409) {
            setInputData({
              ...inputData,
              email: "",
              password: "",
              confirm_password: "",
            });
          } else {
            setInputData({
              name: "",
              email: "",
              password: "",
              confirm_password: "",
            });
          }
        });
    }
  };

  return (
    <>
      <Head>
        <title>The Simple | Cadastro</title>
      </Head>
      <Container>
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
          <span> Criar sua conta </span>
          {errorStatus && <ErrorBox>{errors[errorStatus]}</ErrorBox>}
          <form onSubmit={handleSubmit}>
            {/* <ImageInput name="image" label="Avatar" /> */}
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Nome
              <input
                name="name"
                type="text"
                onChange={handleInput}
                value={inputData.name}
                required={true}
              />
            </label>
            <label>
              E-mail
              <input
                name="email"
                type="email"
                onChange={handleInput}
                value={inputData.email}
                required={true}
              />
            </label>
            <label>
              Senha
              <input
                name="password"
                type="password"
                onChange={handleInput}
                value={inputData.password}
                required={true}
                minLength="8"
              />
            </label>
            <label>
              Confirmar senha
              <input
                name="confirm_password"
                type="password"
                onChange={handleInput}
                value={inputData.confirm_password}
                required={true}
                minLength="8"
              />
            </label>
            <button type="submit"> CADASTRAR </button>
          </form>
          <div className="signinOption">
            Já tem uma conta?
            <Link href="/auth/signin">
              <a>Entrar Agora</a>
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
    </>
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
