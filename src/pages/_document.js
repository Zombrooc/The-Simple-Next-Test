import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          {/* Primary Meta Tags */}
          <meta name="title" content="The Simple" />
          <meta
            name="description"
            content="The Simple Network - Uma maneira simples de solucionar seus  problemas com informática."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.thesimple.ga/" />
          <meta property="og:title" content="The Simple" />
          <meta
            property="og:description"
            content="The Simple Network - Uma maneira simples de solucionar seus  problemas com informática."
          />
          <meta
            property="og:image"
            content="https://thesimpletech.com.br/images/banner.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.thesimple.ga/" />
          <meta property="twitter:title" content="The Simple" />
          <meta
            property="twitter:description"
            content="The Simple Network - Uma maneira simples de solucionar seus  problemas com informática."
          />
          <meta
            property="twitter:image"
            content="https://thesimpletech.com.br/images/banner.png"
          />

          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="The Simple TECH" />

          <meta name="theme-color" content="#2e2e2e" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="194x194"
            href="/images/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#2e2e2e"
          />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2e2e2e" />
          <meta
            name="msapplication-TileImage"
            content="/images/mstile-144x144.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
