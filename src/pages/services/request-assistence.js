import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import kwesforms from "kwesforms";
import { signIn, useSession } from "next-auth/client";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
  Container,
  CenterBox,
} from "../../styles/pages/services/requestAssistence.styles";
import Loading from "../../components/Loading";

export default function RequestAssistence() {
  const [session, loading] = useSession();

  const userName = session?.user.name;
  const userEmail = session?.user.email;

  const router = useRouter();

  useEffect(() => {
    kwesforms.init();
  }, []);

  useEffect(() => {
    if (!loading && !session) {
      signIn(null, {
        callbackUrl: `${
          process.env.NODE_ENV === "production"
            ? "https://thesimpletech.com.br"
            : "http://localhost:3000"
        }${router.pathname}`,
      });
    }
  }, [session, loading]);

  return (
    <Container>
      <Head>
        <title>Solicitar Assistência Técnica - The Simple TECH</title>
      </Head>

      <div className="pushBack" onClick={() => router.back()}>
        <AiOutlineArrowLeft />    Voltar
      </div>

      <CenterBox>
        <h1>
          Solicitar assistência técnica{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "var(--color-danger)",
            }}
          >
            agora
          </span>
        </h1>
        <h2>
          Estamos dedicados em te ajudar com a assistência do seu computador,
          nos conte um pouco mais sobre o que está precisando.
        </h2>

        <hr />

        <form
          className="kwes-form"
          action="https://kwes.io/api/foreign/forms/sm4deYYqXS7sXYikSqvq"
        >
          <input type="hidden" name="_gotcha" />
          <input type="hidden" name="name" value={userName} />
          <input type="hidden" name="email" value={userEmail} />
          <label htmlFor="deviceType">
            {" "}
            Tipo de Equipamento
            <select
              name="deviceType"
              placeholder="Selecione o tipo de equipamento"
              required={true}
              rules="required"
            >
              <option> Selecione o tipo de equipamento </option>
              <option value="desktop"> Desktop (Computador de mesa) </option>
              <option value="notebook"> Notebook </option>
              <option value="all-in-one"> All-In-One </option>
              <option value="others"> Outros.. </option>
            </select>
          </label>
          <label style={{ display: "flex", justifyContent: "flex-start" }}>
            <input
              style={{ width: "inherit", marginRight: "5px" }}
              type="checkbox"
              name="formatDevice"
              value="formatDevice"
            />
            Formatar
          </label>
          <label style={{ display: "flex", justifyContent: "flex-start" }}>
            <input
              style={{ width: "inherit", marginRight: "5px" }}
              type="checkbox"
              name="repairDevice"
            />
            Reparo de equipamento
          </label>
          <label>
            Marca
            <input
              name="brand"
              type="text"
              required={true}
              placeholder="Ex: Acer, HP, Dell, LeNovo..."
            />
          </label>
          <label>
            Modelo (opcional)
            <input name="model" type="text" />
          </label>
          <label htmlFor="problemDescription">
            Descrição do problema
            <textarea
              name="problemDescription"
              rules="required"
              placeholder="Nos dê uma pequena descrição sobre o que você precisa."
            />
          </label>
          <button type="submit"> Solicitar </button>
        </form>
      </CenterBox>

      <Loading show={loading} />
    </Container>
  );
}
