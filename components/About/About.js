import React from "react";
import Section from "../../containers/Section/Section";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/layout";

const image = {
  src: "profile_pic.jpg",
  alt: "profile picture",
  radius: "full",
};

const about = (
  <VStack align="flex-start" spacing={4}>
    <Heading size="lg">About Me</Heading>
    <Text>
      Use this bio section as your way of describing yourself and saying what
      you do, what technologies you like to use or feel most comfortable with,
      describing your personality, or whatever else you feel like throwing in.
    </Text>
  </VStack>
);

const contact = (
  <VStack align="flex-start" spacing={4}>
    <Heading size="lg">Contact Details</Heading>
    <Text>
      Use this bio section as your way of describing yourself and saying what
      you do, what technologies you like to use or feel most comfortable with,
      describing your personality, or whatever else you feel like throwing in.
    </Text>
  </VStack>
);

const resume = (
  <Button size="lg" leftIcon={<ArrowDownIcon />}>
    Download Resume
  </Button>
);

const About = () => {
  return (
    <Section
      bg={useColorModeValue("gray.300", "gray.600")}
      image={image}
      mtl
      mbl
    >
      <VStack spacing={8}>
        {about}
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>{contact}</GridItem>
          <GridItem>{resume}</GridItem>
        </Grid>
      </VStack>
    </Section>
  );
};

export default About;
