import React from "react";
import Section from "../../containers/Section/Section";
import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  List,
} from "@chakra-ui/layout";

const heka = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">
      <Link href="https://heka.ca" isExternal>
        Heka Health | Santé
      </Link>
    </Heading>
    <Text>Full-stack intern, May 2021 - Aug 2021</Text>
    <Text>
      Experience working with Next.js and React in an Agile environment
    </Text>
    <Box>
      <UnorderedList>
        <ListItem>
          Contributions led to product's official launch at the end of the
          internship
        </ListItem>
        <ListItem>
          Integrated Auth0 for secure user authentication and authorization
        </ListItem>
        <ListItem>
          Created various frontend components, like account info UI
        </ListItem>
        <ListItem>Implemented Stripe payment management front-to-back</ListItem>
        <ListItem>
          Improved workflow improvements by setting up linting/style
          auto-formatting, migrating project management to Jira, and making
          documentation guidelines
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const cac = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">
      <Link href="https://github.com/Cache-and-Cookies" isExternal>
        Cache & Cookies
      </Link>
    </Heading>
    <Text>Frontend developer, Oct 2020 - Apr 2021</Text>
    <Text>
      A small side project group created with some friends. We wanted to support
      local businesses recovering from the COVID-19 pandemic. Our goal was to
      provide professional website production services at an affordable price.
      As a result, our clients were able to connect with their customers better
      than ever before using their websites and SEO. Notable works include
      global Bubble Tea chain{" "}
      <Link
        color="red.500"
        fontWeight={700}
        href="https://hiteato.ca/"
        isExternal
      >
        HiTea
      </Link>
      , and{" "}
      <Link
        color="blue.500"
        fontWeight={700}
        href="https://msmrtool.com/"
        isExternal
      >
        MSMR
      </Link>
      , contracted by Dr. Jenny Liu of Ryerson University.
    </Text>
  </VStack>
);

const Experience = () => {
  return (
    <Section title="Experience" separator>
      <VStack spacing={8}>
        {heka}
        {cac}
      </VStack>
    </Section>
  );
};

export default Experience;
