import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/globalStyles.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles/>
    </>
  );
}

export default MyApp;
