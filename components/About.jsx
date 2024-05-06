import React from "react";
import Section from "../layouts/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/layout";
import styles from "../styles/socials.module.css";

const avatar = {
  src: "/profile_pic.jpg",
  name: "Profile picture",
  size: "2xl"
};

const about = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      About Me
    </Heading>
    <Text align="left">
      Hi there! I&apos;m an aspiring software engineer, interested in tech. I&apos;m currently working at <Link href="">Keplar.io</Link>, building LLM agents for customer simulation and product development. Previously, I was at <Link href="">Interac</Link> and <Link href="">WSIB Innovation Lab</Link>. <br />
      I&apos;m a fourth year Computer Science student at the University of
      Waterloo. My current focus in on ML, but I am actively pursuing distributed systems and crypto too! <br />
    </Text>
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
  <Button size="lg" leftIcon={<ExternalLinkIcon />} onClick={(e) => {
    e.preventDefault();
    window.open("resume.pdf");
  }}>
    View Resume
  </Button>
);

const About = () => {
  return (
    <Section
      bg={useColorModeValue("gray.50", "gray.900")}
      avatar={avatar}
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
