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
  UnorderedList,
  ListItem,
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
    <Heading align="left" size="lg">
      About Me
    </Heading>
    <Text align="left">
      I&apos;m a second year Computer Science student at the University of
      Waterloo. Currently, I&apos;m on a study term, but I&apos;m on the lookout
      for internships in summer 2022. <br />
      I&apos;m passionate about tech and software engineering. Learning and
      exploring new technologies is fun, but at the end of the day, I want to
      build software that can make someone else&apos;s day better!
    </Text>
    <Heading align="left" size="lg">
      Hobbies
    </Heading>
    <Box align="left">
      <UnorderedList>
        <ListItem>I play badminton 4-5 times a week</ListItem>
        <ListItem>Badminton gear: Li-ning Tectonic 7D, Victor A-190</ListItem>
        <ListItem>
          Keyboard: TheKey.Company Portico, with lubed+filmed Epsilon switches
        </ListItem>
        <ListItem>Audio: Moondrop Aria, Phillips SPH9500s</ListItem>
        <ListItem>Dream watch: Grand Seiko SBGA211</ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const contact = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      Contact Details
    </Heading>
    <Heading size="md">wxshi@uwaterloo.ca</Heading>
    <HStack spacing={4}>
      <Link href="https://github.com/wx02shi" isExternal>
        <FaGithub className={styles.icon} size={30} />
      </Link>
      <Link href="https://www.linkedin.com/in/wx02shi" isExternal>
        <FaLinkedin className={styles.icon} size={30} />
      </Link>
    </HStack>
  </VStack>
);

const resume = (
  <Button size="lg" leftIcon={<ArrowDownIcon />}>
    <Link
      href="https://drive.google.com/file/d/1cYOrURtaFkC25mqPslULI7MTVyiG06FL/view?usp=sharing"
      isExternal
    >
      View Resume
    </Link>
  </Button>
);

const About = () => {
  return (
    <Section
      bg={useColorModeValue("gray.200", "gray.700")}
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
