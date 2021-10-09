import React from "react";
import { Center, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Center h="100vh" align="center">
      <Stack>
        <Heading>William Shi</Heading>
        <Text>
          Full stack developer, student, enthusiast. <br />
          Previously an intern at <span>Heka Health | Sante</span>
        </Text>
      </Stack>
    </Center>
  );
};

export default Hero;
