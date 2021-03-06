import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Navbar from "../components/Navbar";

import Particles from "react-particles-js";
import particlesConfig from "../config/particles.config.json";

import graficDesign from "../assets/images/grafic-design.svg";
import computerRepair from "../assets/images/computerRepair.svg";
import programming from "../assets/images/programming.svg";
import privateLessons from "../assets/images/privateLessons.svg";
import logoWithTagline from "../assets/images/logoWithTagline.svg";

import Footer from "../components/Footer";

import {
  Container,
  Landing,
  Content,
  Title,
  CardContainer,
} from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>The Simple TECH</title>
      </Head>
      <Navbar />
      <Landing>
        <Particles params={particlesConfig} />
        <Content>
          <Title>
            <h1>
              {" "}
              Soluções em tecnologia de maneira rápida <br /> e eficaz{" "}
            </h1>
            {/* <img src={logoWithTagline} alt="The Simple TECH" /> */}
          </Title>
          <hr />
          <h2 className="brand">
            {" "}
            Assistência Técnica, Cursos, Marketing Digital, Desenvolvimento Web
            e muito <span style={{ color: "var(--color-danger)" }}> + </span>
          </h2>
          <div className="callToAction">
            <ScrollLink
              to="ourServices"
              spy={true}
              smooth={true}
              duration={800}
            >
              Conheça nossos serviços
            </ScrollLink>
          </div>
        </Content>
      </Landing>
      <Container id="ourServices">
        <CardContainer>
          <div className="container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={graficDesign} alt="Design e mídias digitais" />
                  <h3>Design e mídias digitais</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Criação de UI/UX, logomarcas, cartões de visita, panfleto e
                    muito
                    <span style={{ color: "var(--color-danger)" }}>+</span>.
                    Tudo feito de forma profissional e original na melhor
                    qualidade possível.
                  </p>
                  <a href="https://wa.me/p/4501937493186011/553588777750">
                    Fazer orçamento
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={computerRepair} alt="Manutenção de Computadores" />
                  <h3>Assitência Técnica Especializada</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Formatação e manutenção de computadores e notebooks de forma
                    rápida e eficiente. Backup grátis, softwares atualizados,
                    melhora de desempenho. Buscamos o equipamento em sua
                    residência ou empresa.
                  </p>
                  <Link href="/services/request-assistence">
                    <a> Solicitar assistência </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={programming} alt="Desenvolvimento Web" />
                  <h3>Desenvolvimento de Sites</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Criação de sites completos usando o que há de mais atual nas
                    tecnologias de desenvolvimento Web. Oferecemos sites
                    performáticos e dinâmicos para que você e sua empresa possam
                    ganhar mais espaço na internet.
                  </p>
                  <Link href="/services/web-design">
                    <a> Conhecer serviço </a>
                    </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img src={privateLessons} alt="Aulas particulares" />
                  <h3>Aulas Particulares</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Acreditamos que conhecimento é poder e que devemos sempre
                    passa-lo adiante, por isso oferecemos aulas particulares nas
                    mais diversas área de informática. Informática Essencial,
                    Desenvolvimento Web do básico ao avançado, Design e muito{" "}
                    <span style={{ color: "var(--color-danger)" }}>+</span>.
                  </p>
                  <a href="https://wa.me/message/FD6P356HWLEVH1">
                    Agendar horário
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
      </Container>
      <Container>
        <Footer />
      </Container>
    </Container>
  );
}
