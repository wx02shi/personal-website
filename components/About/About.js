import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";

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
  <Box p="4" bg="gray.700">
    Download Resume
  </Box>
);

const About = () => {
  return (
    <HStack bg="gray.400" w="100%">
      <Box>Image</Box>
      <VStack>
        {about}
        <HStack>
          {contact}
          {resume}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default About;
