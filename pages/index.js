import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import { Box } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box w="100%">
      <Box h="100vh" w="100%">
        <Navbar />
        <Hero />
      </Box>

      <About />
      <Education />
    </Box>
  );
}
