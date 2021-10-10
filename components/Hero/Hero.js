import React from "react";
import { Center, Heading, Stack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Center h="100%" w="100%" align="center" m={0}>
      <Stack maxW="container.md">
        <Heading>William Shi</Heading>
        <Text>
          Full stack developer, student, enthusiast. <br />
          Previously an intern at <span>Heka Health | Sante</span>
        </Text>
        <div>Github, linkedin</div>
        <div>Button to next section, but at bottom of the hero</div>
      </Stack>
    </Center>
  );
};

export default Hero;
