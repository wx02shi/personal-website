import React from "react";
import { Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Heading, HStack, Link, Stack, Text } from "@chakra-ui/react";

import styles from "../../styles/socials.module.css";
import heroStyles from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <Stack align="start" maxW="container.md" spacing={6}>
        <Stack align="start" spacing={1}>
          <Heading size="xl">Nice to meet you, I&apos;m</Heading>
          <Heading className={heroStyles.color} size="4xl" fontSize="9xl">
            William
          </Heading>
        </Stack>

        <Text fontSize="2xl" align="start">
          Studying computer science @ <b>University of Waterloo</b> <br />
          Previous software developer at {" "}
          
          <Link href="https://www.interac.ca/en/" color="yellow.400" isExternal>
            <b>Interac Corp.</b>
          </Link>
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/wx02shi" isExternal>
            <FaGithub className={styles.icon} size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/wx02shi" isExternal>
            <FaLinkedin className={styles.icon} size={30} />
          </Link>
        </HStack>
      </Stack>
    </>
  );
};

export default Hero;
