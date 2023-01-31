import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";

export const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 0 2px var(--red1)",
  },
});

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: 300,
  backgroundColor: "$background",
  boxShadow: "0 2px 10px $foreground",
  fontFamily: "$body",
});

export const AccordionHeader = styled(Accordion.Header, {
  display: "flex",
});

export const AccordionTrigger = styled(Accordion.Trigger, {
  fontFamily: "inherit",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "$red11",
  boxShadow: "0 1px 0 $background",
  backgroundColor: "white",

  "&:hover": {
    backgroundColor: "$red12",
  },

  "&[data-state='open']": {
    ".AccordionChevron": {
      transform: "rotate(180deg)",
    },
  },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const AccordionContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: "$foreground",
  backgroundColor: "$background",

  "&[data-state='open']": {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
