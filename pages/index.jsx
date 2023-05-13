import AffixMenu from "../components/AffixMenu";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Unavail from "../components/Unavail";
import { Box, VStack } from "@chakra-ui/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>William Shi</title>
      </Head>
      <Box w="100%" align="center" display={{ base: "none", md: "block" }}>
        <VStack
          h="100vh"
          w="100%"
          maxW="container.lg"
          align="start"
          justify="center"
          pl={48}
        >
          <Hero />
        </VStack>

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Connect />

        <AffixMenu />
        <Footer />
      </Box>
      <Unavail />
    </>
  );
}
