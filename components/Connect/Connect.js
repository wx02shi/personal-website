import React from "react";
import Section from "../../containers/Section/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import styles from "./connect.module.css";

const Connect = () => {
  return (
    <Section title="Connect" separator mbl>
      <VStack align="start" spacing={4}>
        <Text>
          Want to get in touch with me? You can always reach out to me via email
          or Linkedin, and I'll get back to you as quickly as possible. Thank
          you for your time!
        </Text>
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
    </Section>
  );
};

export default Connect;