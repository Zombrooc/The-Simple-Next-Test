import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn, useSession } from "next-auth/client";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Loading from "../../components/Loading";
import {
  Container,
  CenterBox,
  Success,
} from "../../styles/pages/services/requestAssistence.styles";

export default function RequestAssistence() {
  const [session, loading] = useSession();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    deviceType: "",
    brand: "",
    model: "",
    formatDevice: false,
    repairDevice: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      signIn(null, {
        callbackUrl: `${process.env.NEXTAUTH_URL}${router.pathname}`,
      });
    }
  }, [session, loading]);

  const handleInput = (event) => {
    if (event.target.name === "formatDevice") {
      return setInputData({
        ...inputData,
        formatDevice: !inputData.formatDevice,
      });
    }

    if (event.target.name === "repairDevice") {
      return setInputData({
        ...inputData,
        repairDevice: !inputData.repairDevice,
      });
    }

    return setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const encodeForm = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    axios
      .post(
        "https://formcarry.com/s/8DcdRmYIA2N",
        encodeForm({
          ...inputData,
          name: session.user.name,
          email: session.user.email,
        }),
        {
          headers: { Accept: "application/json" },
        }
      )
      .then(function (response) {
        return (
          <Success>
            <div className="card">
              <div
                style={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  background: "#F8FAF5",
                  margin: "0 auto",
                }}
              >
                <i className="checkmark">✓</i>
              </div>
              <h1>Sucesso!</h1>
              <p>
                Recebemos sua mensagem;
                <br /> Logo entraremos em contato com você!
              </p>
              <button type="button" onClick={() => router.push("/")}>
                {" "}
                Retornar para a tela inicial{" "}
              </button>
            </div>
          </Success>
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    return;
  };

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

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_gotcha" />
          <label htmlFor="deviceType">
            {" "}
            Tipo de Equipamento
            <select
              name="deviceType"
              placeholder="Selecione o tipo de equipamento"
              required={true}
              onChange={handleInput}
              value={inputData.deviceType}
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
              onChange={handleInput}
              checked={inputData.formatDevice}
            />
            Formatar
          </label>
          <label style={{ display: "flex", justifyContent: "flex-start" }}>
            <input
              style={{ width: "inherit", marginRight: "5px" }}
              type="checkbox"
              name="repairDevice"
              onChange={handleInput}
              checked={inputData.repairDevice}
            />
            Concertar de equipamento
          </label>
          <label>
            Marca
            <input
              name="brand"
              type="text"
              required={true}
              placeholder="Ex: Acer, HP, Dell, LeNovo..."
              onChange={handleInput}
              value={inputData.brand}
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
          <label htmlFor="problemDescription">
            Descrição do problema
            <textarea
              name="problemDescription"
              required={true}
              placeholder="Nos dê uma pequena descrição sobre o que você precisa."
              onChange={handleInput}
              value={inputData.problemDescription}
            />
          </label>
          <button type="submit"> Solicitar </button>
        </form>
      </CenterBox>

      <Loading show={loading} />
    </Container>
  );
}
