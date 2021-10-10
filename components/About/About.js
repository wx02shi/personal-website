import React from "react";
import Section from "../../containers/Section/Section";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/layout";

const image = { src: "vercel.svg", alt: "profile picture", radius: "full" };

const about = (
  <VStack align="flex-start" w="100%">
    <Heading>About Me</Heading>
    <Text>
      Use this bio section as your way of describing yourself and saying what
      you do, what technologies you like to use or feel most comfortable with,
      describing your personality, or whatever else you feel like throwing in.
    </Text>
  </VStack>
);

const contact = (
  <VStack align="flex-start">
    <Heading>Contact Details</Heading>
    <Text>
      Use this bio section as your way of describing yourself and saying what
      you do, what technologies you like to use or feel most comfortable with,
      describing your personality, or whatever else you feel like throwing in.
    </Text>
  </VStack>
);

const resume = (
  <Box p="4" bg="gray.500">
    Download Resume
  </Box>
);

const About = () => {
  return (
    <Section bg="gray.200" image={image}>
      <VStack>
        {about}
        <HStack>
          {contact}
          {resume}
        </HStack>
      </VStack>
    </Section>
  );
};

export default About;
