import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { darkTheme } from "@/stitches.config";
import Image from "next/image";
import { Flex } from "@/components/primitives/Flex";
import { Block } from "@/components/primitives/Block";
import { Text } from "@/components/primitives/Text";
import {
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AccordionContent,
} from "@/components/organisms/Accordion/AccordionStyled";
import { AccordionDemo } from "@/components/organisms/Accordion/Accordion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { Apple } from "lucide-react";
import { LabelDemo } from "components/atoms/Label/Label";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              <Text size={4}>Heres some content</Text>
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              {/* Header content */}
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Block className={darkTheme}>
            <Text size={1} variant="primary">
              Text 1
              <FaceIcon />
            </Text>
          </Block>
          <Block>
            <Text size={2} variant="primary">
              Text 2
              <SunIcon />
            </Text>
          </Block>
          <Block>
            <Text variant="red" gradient={true} size={3}>
              Text 3
              <ImageIcon />
            </Text>
          </Block>
          <Apple size={50} color="blue" strokeWidth={2} />
          <AccordionRoot type="single" defaultValue="item-2" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Image shown by default</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>huh</AccordionTrigger>
              <AccordionContent>
                <AspectRatio.Root ratio={16 / 9}>
                  <Image
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                    alt="Picture of the author"
                    width={300}
                    height={169}
                  />
                </AspectRatio.Root>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
          <LabelDemo />
          <AccordionDemo />
        </AppShell>
      </MainContainer>
    </>
  );
}

const MainContainer: React.FC<PropsWithChildren> = (props) => (
  <Flex direction="column" align="center" justify="center" gap={4} {...props} />
);
