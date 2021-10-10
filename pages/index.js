import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import { VStack } from "@chakra-ui/layout";

export default function Home() {
  return (
    <VStack w="100%">
      <VStack h="100vh" w="100%">
        <Navbar />
        <Hero />
      </VStack>

      <About />
      <Education />
    </VStack>
  );
}
