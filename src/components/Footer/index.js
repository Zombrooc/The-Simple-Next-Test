import React from "react";
import Link from 'next/link';

import logoWithTagline from '../../assets/images/logoWithTagline-Dark.svg';

import { Container } from "./styles.js";

function Footer() {
  return (
    <Container>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">
            {/* The Simple{" "}
            <span style={{ fontFamily: "JetBrains Mono" }}>TECH</span> */}
            <img src={logoWithTagline} alt="The Simple TECH"/>
          </h1>

          <h2>Contato</h2>

          <address>
            Av. Sete de Setembro, 501, Centro - Três Corações/MG
            <br />
            37410-155
            <br />
            {/* <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a> */}
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Redes Sociais</h2>

            <ul className="nav__ul">
              <li>
                <a href="https://www.facebook.com/the.simple.tech.solutions">
                  Facebook
                </a>
              </li>

              <li>
                <a href="https://wa.me/message/FD6P356HWLEVH1">WhatsApp</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Serviços</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="https://wa.me/p/3570230293095834/553588777750">Desenvolvimento Web</a>
              </li>

              <li>
                <a href="https://wa.me/message/FD6P356HWLEVH1">Aulas Particulares</a>
              </li>

              <li>
                {/* <Link href="/services/request-assistence">
                  <a>Assistência Técnica</a>
                </Link> */}
                <a href="https://wa.me/message/FD6P356HWLEVH1"> Assistência Técnica </a>
              </li>

              <li>
                <a href="https://wa.me/p/4501937493186011/553588777750">
                  Design e Mídias Digitais
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="https://www.thesimpletech.com.br/termo-de-politica-e-privacidade.html">
                  Termos de politica e Privacidade
                </a>
              </li>

              <li>
                <a href="https://www.thesimpletech.com.br/termo-de-servico.html">
                  Termos de Serviço
                </a>
              </li>

              <li>
                <a href="https://www.thesimpletech.com.br/sitemap_index.xml">
                  Sitemap
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2021 The Simple TECH. CNPJ: 40.783.021/0001-45. Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
