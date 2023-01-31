import type { AppProps } from "next/app";
import { Inter, Space_Grotesk } from "@next/font/google";

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
      <Component {...pageProps} />
    </>
  );
}
