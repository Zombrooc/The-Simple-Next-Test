import React from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";

import Navbar from "../components/Navbar";

import { Container } from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>The Simple TECH</title>
      </Head>
      <Navbar />

      <h1> Next.JS BoilerPlate without TS </h1>

      
    </Container>
  );
}
