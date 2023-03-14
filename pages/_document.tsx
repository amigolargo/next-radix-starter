import Document, { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import { MantineProvider } from "@mantine/core";
import { getCssText } from "@/stitches.config";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
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
