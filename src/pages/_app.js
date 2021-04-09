import React from "react";

import Head from 'next/head'

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/globalStyles.module.css";

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
