import { styled } from "@/stitches.config";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontFamily: "$body",
  fontWeight: "$heavy",
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
    },
    variant: {
      primary: {
        color: "$foreground",
        backgroundColor: "$background",
      },
      red: {
        color: "$red11",
      },
      contrast: {
        color: "#000000",
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: "text !important",
        WebkitTextFillColor: "transparent",
      },
    },
  },
  compoundVariants: [
    {
      variant: "red",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $red11, $crimson11)",
      },
    },
  ],
  defaultVariants: {
    size: "3",
    variant: "contrast",
  },
});
