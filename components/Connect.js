import React from "react";
import Section from "../layouts/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DarkMode } from "@chakra-ui/color-mode";
import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import styles from "../styles/socials.module.css";

const Connect = () => {

  return (
    <DarkMode>
      <Section title="Connect" separator mbl>
        <VStack align="start" spacing={4}>
          <Text align="left">
            Want to get in touch with me? You can always reach out to me via
            email or Linkedin, and I&apos;ll get back to you as quickly as
            possible. Thank you for your time!
          </Text>
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
      </Section>
    </DarkMode>
  );
};

export default Connect;
