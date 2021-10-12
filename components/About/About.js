import React from "react";
import Section from "../../containers/Section/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
  Link,
  Text,
  VStack,
} from "@chakra-ui/layout";
import styles from "../../styles/socials.module.css";

const image = {
  src: "profile_pic.jpg",
  alt: "profile picture",
  radius: "full",
};

const about = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">About Me</Heading>
    <Text>
      I'm a second year Computer Science student at the University of Waterloo.
      Currently, I'm on a study term, but I'm on the lookout for internships in
      summer 2022. <br />
      I'm passionate about tech and software engineering. Learning and exploring
      new technologies is fun, but at the end of the day, I want to build
      software that can make someone else's day better!
    </Text>
  </VStack>
);

const contact = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">Contact Details</Heading>
    <Heading size="md">wxshi@uwaterloo.ca</Heading>
    <HStack spacing={4}>
      <Link href="https://github.com/williamsxz99" isExternal>
        <FaGithub className={styles.icon} size={30} />
      </Link>
      <Link href="https://www.linkedin.com/in/shi-william" isExternal>
        <FaLinkedin className={styles.icon} size={30} />
      </Link>
    </HStack>
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
      <VStack align="start" spacing={8}>
        {about}
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <GridItem>{contact}</GridItem>
          <GridItem>{resume}</GridItem>
        </Grid>
      </VStack>
    </Section>
  );
};

export default About;
