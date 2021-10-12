import AffixMenu from "../components/AffixMenu/AffixMenu";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Connect from "../components/Connect/Connect";
import Footer from "../components/Footer/Footer";
import { Box, Center, VStack } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box w="100%" align="center">
      <AffixMenu />
      <VStack h="100vh" w="100%" maxW="container.lg">
        <Hero />
      </VStack>

      <About />
      <Education />
      <Experience />
      <Skills />
      <Connect />

      <Footer />
    </Box>
  );
}
