import React from "react";
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
          Full stack developer, student, enthusiast. <br />
          Previous intern at{" "}
          <Link href="https://www.heka.ca" isExternal>
            Heka Health | Santé
          </Link>
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/williamsxz99" isExternal>
            <FaGithub className={styles.icon} size={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/shi-william" isExternal>
            <FaLinkedin className={styles.icon} size={30} />
          </Link>
        </HStack>
      </Stack>
    </>
  );
};

export default Hero;
