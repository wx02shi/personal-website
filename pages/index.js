import AffixMenu from "../components/AffixMenu/AffixMenu";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer/Footer";
import Unavail from "../components/Unavail/Unavail";
import { Box, VStack } from "@chakra-ui/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>William Shi</title>
      </Head>
      <Box w="100%" align="center" display={{ base: "none", md: "block" }}>
        <AffixMenu />

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

        <Footer />
      </Box>
      <Unavail />
    </>
  );
}
