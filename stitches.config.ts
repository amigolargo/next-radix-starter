import { red, crimson } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      ...red,
      ...crimson,
      // semantic colours
      foreground: "#000000",
      background: "#efefef",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "60px",
    },
    fonts: {
      headings: "var(--inter-font)",
      body: "var(--space-grotesk-font)",
    },
    fontSizes: {
      1: "24px",
      2: "36px",
      3: "48px",
    },
    fontWeights: {
      light: 300,
      medium: 400,
      heavy: 600,
    },
  },
  media: {
    sm: "(min-width: 480px)",
    m: "(min-width: 768px)",
    l: "(min-width: 1024px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});

export const darkTheme = createTheme({
  colors: {
    foreground: "#ffffff",
    background: "#999999",
  },
});
