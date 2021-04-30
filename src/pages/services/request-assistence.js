import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import {
  Container,
  CenterBox,
} from "../../styles/pages/services/requestAssistence.styles";

export default function RequestAssistence() {
  const router = useRouter();

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
            Tipo de Equipamento
            <input
              name="deviceType"
              type="text"
              onChange={handleInput}
              value={inputData.deviceType}
              required={true}
              placeholder="Ex: Computador, Notebook, All-in-One..."
            />
          </label>
          <label>
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
          </label>
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
    </Container>
  );
}
