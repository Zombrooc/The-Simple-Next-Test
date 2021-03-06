import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container } from "../../styles/pages/services/web-design.styles";

function web_design() {
  return (
    <>
      <Head>
        <title> Web Design </title>

        <meta
          name="keywords"
          content="web designer web designer freelancer web design responsivo web design agency web design agencia a web designers website a web designing company web design brasil web design e design gráfico web design empresa web design ecommerce"
        />
      </Head>
      <Navbar />
      <Container>
        <div className="heading">
          <h1 className="text" style={{ lineHeight: "1", }}>
            Impusione seu negócio no mundo digital
          </h1>
          <hr
            style={{ width: "90%", marginTop: "15px", marginBottom: "15px" }}
          />
          <h2 className="text"> Criação de sites </h2>

          <div className="wrapper" style={{ display: "flex" }}>
            <div className="offset">
              <h2 className="text animate-before">MODERNOS</h2>
            </div>
            <div className="offset">
              <h2 className="text animate-before">RÁPIDOS</h2>
            </div>
            <div className="offset">
              <h2 className="text animate-before">RESPONSIVOS</h2>
            </div>
          </div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              const headings = document.querySelectorAll(".heading .wrapper .text");
              console.log(headings);
              
              function enterScreen(index) {
                const heading = headings[index];
              
                heading.classList.remove("animate-before", "animate-after");
              }
              
              function exitScreen(index, exitDelay) {
                const heading = headings[index];
              
                heading.classList.add("animate-after");
              }
              
              function setupAnimationCycle({ timePerScreen, exitDelay }) {
                const cycleTime = timePerScreen + exitDelay;
                let nextIndex = 0;
              
                function nextCycle() {
                  const currentIndex = nextIndex;
              
                  enterScreen(currentIndex);
              
                  setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);
              
                  nextIndex = nextIndex >= headings.length - 1 ? 0 : nextIndex + 1;
                }
              
                nextCycle();
              
                setInterval(nextCycle, cycleTime);
              }
              
              setupAnimationCycle({
                timePerScreen: 2000, // ms
                exitDelay: 200 * 7, // ms
              });
                  `,
        }}
      ></script>
      <Footer />
    </>
  );
}

export default web_design;
