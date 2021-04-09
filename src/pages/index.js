import React from "react";
import Head from "next/head";

import particlesConfig from "../config/particles.config.json";

// import Navbar from "../components/Navbar";

import GraficDesign from "../assets/images/grafic-design.svg";
// import ComputerRepair from "../assets/images/computerRepair.svg";

import {
  Container,
  Landing,
  Content,
  Title,
  CardContainer,
} from "../styles/pages/home.styles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <GraficDesign/>
      <main>
        <h1>Hello world!</h1>
      </main>
    </div>
  );
}
