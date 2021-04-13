import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/externalImports.module.css";

export function reportWebVitals(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '244600255');
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
