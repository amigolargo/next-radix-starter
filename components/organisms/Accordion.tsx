import React, { PropsWithChildren, Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  AccordionItem,
  AccordionRoot,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "./AccordionStyled";

export const AccordionDemo = () => (
  <AccordionRoot type="single" defaultValue="item-1" collapsible>
    <AccordionItem value="item-1">
      <AccordionTriggerExtended>Is it accessible?</AccordionTriggerExtended>
      <AccordionContentExtended>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContentExtended>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTriggerExtended>Is it unstyled?</AccordionTriggerExtended>
      <AccordionContentExtended>
        Yes. Its unstyled by default, giving you freedom over the look and feel.
        Yes. Its unstyled by default, giving you freedom over the look and feel.
        Yes. Its unstyled by default, giving you freedom over the look and feel.
      </AccordionContentExtended>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTriggerExtended>Can it be animated?</AccordionTriggerExtended>
      <Accordion.Content>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </Accordion.Content>
    </AccordionItem>
  </AccordionRoot>
);

const AccordionTriggerExtended: React.FC<PropsWithChildren> = React.forwardRef(
  (
    { children, ...props },
    forwardedRef: Ref<HTMLButtonElement> | undefined
  ) => (
    <AccordionHeader>
      <AccordionTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </AccordionTrigger>
    </AccordionHeader>
  )
);

AccordionTriggerExtended.displayName = "AccordionTriggerExtended";

const AccordionContentExtended: React.FC<PropsWithChildren> = React.forwardRef(
  ({ children, ...props }, forwardedRef: Ref<HTMLDivElement> | undefined) => (
    <AccordionContent {...props} ref={forwardedRef}>
      {children}
    </AccordionContent>
  )
);

AccordionContentExtended.displayName = "AccordionContentExtended";

export default AccordionDemo;
