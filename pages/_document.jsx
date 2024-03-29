/* eslint-disable @next/next/no-document-import-in-page */
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/fire_1f525.png" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            useSystemColorMode={theme.config.useSystemColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
