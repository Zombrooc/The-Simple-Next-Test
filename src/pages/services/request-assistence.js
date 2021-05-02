import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession, getSession } from "next-auth/client";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
  Container,
  CenterBox,
} from "../../styles/pages/services/requestAssistence.styles";
import Loading from "../../components/Loading";

export default function RequestAssistence() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      signIn(null, {
        callbackUrl: `${process.env.NODE_ENV === 'production' ? 'https://thesimpletech.com.br' : 'http://localhost:3000'}${router.pathname}`,
      });
    }
  }, [session, loading]);

  const [inputData, setInputData] = useState({
    deviceType: "",
    brand: "",
    model: "",
    problemDescription: "",
  });

  const handleInput = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputData);

    return true;
  };

  return (
    <Container>
      <Head>
        <title>The Simple - Assistência Técnica</title>
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

        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Tipo de Equipamento
            <select
              name="deviceType"
              placeholder="Selecione o tipo de equipamento"
              onChange={handleInput}
              value={inputData.deviceType}
              required={true}
            >
              <option> Selecione o tipo de equipamento </option>
              <option value="desktop"> Desktop (Computador de mesa) </option>
              <option value="notebook"> Notebook </option>
              <option value="all-in-one"> All-In-One </option>
              <option value="others"> Outros.. </option>
            </select>
          </label>
          {/* <label>
            Marca
            <input
              name="brand"
              type="text"
              onChange={handleInput}
              value={inputData.brand}
              required={true}
              placeholder="Ex: Acer, HP, Dell, LeNovo..."
            />
          </label>
          <label>
            Modelo (opcional)
            <input
              name="model"
              type="text"
              onChange={handleInput}
              value={inputData.model}
            />
          </label> */}
          <label>
            Descrição do problema
            <textarea
              name="problemDescription"
              type="text"
              onChange={handleInput}
              value={inputData.problemDescription}
              required={true}
              placeholder="Nos de uma pequena descrição sobre o que você precisa."
            />
          </label>
          <button type="submit"> Solicitar </button>
        </form>
      </CenterBox>
      <Loading show={loading}/>
    </Container>
  );
}
