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
      </Head>

      <Navbar />

      <Container>
        <div>
          <div className="heading">
            <h1 className="text">Impusione seu negócio no mundo digital</h1>
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
