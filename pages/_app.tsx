import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, Space_Grotesk } from "@next/font/google";
import { MantineProvider } from "@mantine/core";
// Global component styles (for rapid prototyping only, convert to CSS-in-JS when customising)
import "components/atoms/Label/styles.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  variable: "--fonts-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--fonts-spaceGrotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
