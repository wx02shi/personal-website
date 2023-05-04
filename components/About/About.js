import React from "react";
import Section from "../../layouts/Section/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
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
    <Heading align="left" size="lg">
      About Me
    </Heading>
    <Text align="left">
      I&apos;m a third year Computer Science student at the University of
      Waterloo. Currently, I&apos;m on a study term, but I&apos;m on the lookout
      for internships in fall 2023. <br />
      I&apos;ve been passionate about technology ever since I was a young boy. The industry evolves quickly and always establishes new trends, it's hard not to see a promising future.
      At the end of the day, I want to be able to say that I built something that can make someone else&apos;s life better!
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
    window.open("william_shi_resume.pdf");
  }}>
      View Resume
  </Button>
);

const About = () => {
  return (
    <Section
      bg={useColorModeValue("gray.50", "gray.900")}
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
