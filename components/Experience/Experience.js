import React from "react";
import Section from "../../containers/Section/Section";
import {
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
    </Text>
  </VStack>
);

const Experience = () => {
  return (
    <Section title="Experience" separator>
      {heka}
    </Section>
  );
};

export default Experience;
