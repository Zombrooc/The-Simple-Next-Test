import React from "react";
import { Provider } from "next-auth/client";
import Head from "next/head";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/globalStyles.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      session={pageProps.session}
      options={{
        clientMaxAge: 60,
        keepAlive: 5 * 60,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
