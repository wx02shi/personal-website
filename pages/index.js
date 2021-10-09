import Hero from "../components/Hero/Hero";
import { Box, Center } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Center maxW="container.md" m="auto">
      <Hero />
    </Center>
  );
}
