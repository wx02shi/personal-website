import React from "react";
import Section from "../../layouts/Section/Section";
import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import { Tag, Image } from "@chakra-ui/react";

const interac = (
  <VStack align="start" spacing={4}>
    <HStack>
      <Image src="Interac.png" boxSize="3rem" mr={2} />
      <Heading align="left" size="lg">
        <Link href="https://interac.ca" isExternal>
          Interac Corp.
        </Link>
      </Heading>
    </HStack>
    
    <HStack>
      <Tag colorScheme="yellow">Python</Tag>
      <Tag colorScheme="red">NLP</Tag>
      <Tag colorScheme="teal">FastAPI</Tag>
      <Tag colorScheme="blue">PostgreSQL</Tag>
      <Tag colorScheme="green">MongoDB</Tag>
      <Tag colorScheme="purple">Azure</Tag>
      <Tag colorScheme="teal">React</Tag>
      <Tag colorScheme="cyan">Next.js</Tag>
    </HStack>
    <Text>Software developer intern, Jan 2023 - Apr 2023</Text>
    <Text>
      Spearheaded development for a new data-driven market analytics tool for internal use.
    </Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Wrote NLP processes for news articles & financial reports: topic modeling, keyword extraction, named-entity recognition
        </ListItem>
        <ListItem>
          Performed exploratory data analysis to select valuable datasets
        </ListItem>
        <ListItem>
          Implemented data pipeline: data source ingestion, processing, caching, and storage
        </ListItem>
        <ListItem>
          Created backend REST API: DB schemas, CRUD, auth, and endpoints
        </ListItem>
        <ListItem>
          Deployed backend and databases on Azure cloud
        </ListItem>
        <ListItem>
          Created frontend UI components, layouts, and request links to backend
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const wsib = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://wsib-lab.ca" isExternal>
        Workplace Safety & Insurance Board
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="teal">Node.js</Tag>
      <Tag colorScheme="green">MongoDB</Tag>
      <Tag colorScheme="blue">Flutter</Tag>
      <Tag colorScheme="orange">Firebase</Tag>
      <Tag colorScheme="cyan">OpenAPI</Tag>
    </HStack>
    <Text>Full-stack intern, May 2022 - Aug 2022</Text>
    <Text>
      Lead a team of six developers to revamp WSIB’s outdated injury claim
      process into a modern mobile app
    </Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Researched and chose tech stack (Flutter, Node.js, MongoDB,
          Firebase), set up workspace (GitHub repos, Jira)
        </ListItem>
        <ListItem>
          Primary work involved creating the backend: database schemas, flows, business logic
        </ListItem>
        <ListItem>
          Implemented authentication & authorization with Firebase in frontend
          and backend, plus middleware protection
        </ListItem>
        <ListItem>
          Created automated backend documentation using Swagger (OpenAPI) and
          JSDoc
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const heka = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://mypaperminds.com" isExternal>
        Paperminds (formerly Heka Health | Santé)
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="teal">React</Tag>
      <Tag colorScheme="cyan">Next.js</Tag>
      <Tag colorScheme="blue">PostgreSQL</Tag>
      <Tag colorScheme="red">Auth0</Tag>
      <Tag colorScheme="purple">Stripe</Tag>
    </HStack>
    <Text>Full-stack intern, May 2021 - Aug 2021</Text>
    <Text>
      Experience working with Next.js and React in an Agile environment
    </Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Contributions led to product&apos;s official launch at the end of the
          internship
        </ListItem>
        <ListItem>
          Introduced secure user authentication & authorization processes using Auth0
        </ListItem>
        <ListItem>
          Created frontend components such as account info UI
        </ListItem>
        <ListItem>Implemented user online payment integration with Stripe</ListItem>
        <ListItem>
          Improved team workflow by setting up linting, introducing Jira, and making documentation
          guidelines, which allowed us to move launch schedule ahead by two weeks
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const cac = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://github.com/Cache-and-Cookies" isExternal>
        Cache & Cookies
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="teal">React</Tag>
      <Tag colorScheme="cyan">Next.js</Tag>
      <Tag colorScheme="green">Django</Tag>
      <Tag colorScheme="purple">Strapi</Tag>
      <Tag colorScheme="red">Figma</Tag>
    </HStack>
    <Text>Frontend developer, Oct 2020 - Apr 2021</Text>
    <Text align="left">
      A small company created with some friends. We wanted to support
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
    <Section title="Experience" mtl>
      <VStack spacing={8}>
        {interac}
        {wsib}
        {heka}
        {cac}
      </VStack>
    </Section>
  );
};

export default Experience;
