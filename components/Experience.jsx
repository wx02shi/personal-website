import React from "react";
import Section from "../layouts/Section";
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

const keplar = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://www.keplar.io/" isExternal>
        Keplar.io
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="red">NLP</Tag>
      <Tag colorScheme="teal">LLMs</Tag>
      <Tag colorScheme="blue">Agents</Tag>
    </HStack>
    <Text>Software Engineer intern, May 2024 - present</Text>
    <Text>Building LLM agents for customer simulation and better product development!</Text>
  </VStack>
);

const interac2 = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://interac.ca" isExternal>
        Interac
      </Link>
    </Heading>

    <HStack>
      <Tag colorScheme="orange">Java</Tag>
      <Tag colorScheme="green">Spring</Tag>
      <Tag colorScheme="blue">PostgreSQL</Tag>
      <Tag colorScheme="red">OAuth 2.0</Tag>
      <Tag colorScheme="yellow">Python</Tag>
      <Tag colorScheme="blue">GPT-4</Tag>
      <Tag colorScheme="purple">Azure</Tag>
      <Tag colorScheme="teal">React</Tag>
    </HStack>
    <Text>Software Engineer intern, Sep 2023 - Dec 2023</Text>
    <Text>
      Spearheaded development for a new data-driven market analytics tool for internal use.
    </Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Built Python, GPT-4 app to detect compliance breaches in employee emails, decreasing false positives by 47%
        </ListItem>
        <ListItem>
          Pioneered Java, Spring, PostgreSQL Open Banking API framework, enabling frictionless and secure data inter-operability for millions of consumers, businesses, and financial institutions across Canada
        </ListItem>
        <ListItem>
          Incorporated Docker, Kubernetes microservice architecture to scale network to 70+ financial institutions
        </ListItem>
        <ListItem>
          Implemented security model using OAuth 2.0, OIDC and encryption, for Financial-grade API certification
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const interac1 = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://interac.ca" isExternal>
        Interac
      </Link>
    </Heading>

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
    <Text>Software Engineer intern, Jan 2023 - Apr 2023</Text>
    <Text>
      Spearheaded development for a new data-driven market analytics tool for internal use.
    </Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Led R&D of NLP toolkit, boosting developer velocity and advancing company OKR to leverage AI technology
        </ListItem>
        <ListItem>
          Created shared NLP cloud with Python, Azure, migrated existing projects to optimize operating costs by 20%
        </ListItem>
        <ListItem>
          Simplified NLP model results for 50+ nontechnical employees by building web dashboards with NextJS, Tailwind
        </ListItem>
        <ListItem>
          Implemented data pipelines and parallelized AI model training with MongoDB, Docker, Kubernetes, to process over 10TB of research paper data
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const wsib = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://www.linkedin.com/company/wsib-innovation-lab/" isExternal>
        WSIB Innovation Lab
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="teal">Node.js</Tag>
      <Tag colorScheme="green">MongoDB</Tag>
      <Tag colorScheme="blue">Flutter</Tag>
      <Tag colorScheme="orange">Firebase</Tag>
      <Tag colorScheme="cyan">OpenAPI</Tag>
    </HStack>
    <Text>Software Engineer intern, May 2022 - Aug 2022</Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Led team of developers to revamp insurance service, saving $1.5M annually in claim processing costs
        </ListItem>
        <ListItem>
          Engineered mobile app stack with Flutter, NodeJS, MongoDB to automate 90% of claim processes
        </ListItem>
        <ListItem>
          Incorporated API security with user authentication and authorization using OAuth 2.0
        </ListItem>
        <ListItem>
          Developed automated backend documentation using OpenAPI to streamline handoff to future developers
        </ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

const heka = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      <Link href="https://mypaperminds.com" isExternal>
        Paperminds AI
      </Link>
    </Heading>
    <HStack>
      <Tag colorScheme="teal">React</Tag>
      <Tag colorScheme="cyan">Next.js</Tag>
      <Tag colorScheme="blue">PostgreSQL</Tag>
      <Tag colorScheme="red">Auth0</Tag>
      <Tag colorScheme="purple">Stripe</Tag>
    </HStack>
    <Text>Software Engineer intern, May 2021 - Aug 2021</Text>
    <Box align="left">
      <UnorderedList>
        <ListItem>
          Launched web app for early-stage startup using NextJS, PostgreSQL, fast-tracking launch by one month
        </ListItem>
        <ListItem>
          Shipped end-to-end MVP features like Stripe payments, Google Maps integration, appointments, and Auth0 security
        </ListItem>
        <ListItem>
          Incorporated classical NLP techniques like tf-idf to accelerate SBERT embedding generation by 20%
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
      Started a development studio with classmates, to help local businesses recover and go digital and during pandemic lockdown.
      Built web-apps in Next.js and MERN stack for bubble tea chain HiTea and contract work for TMU professor.
      Created wireframes and styled components in Figma.
    </Text>
  </VStack>
);

const Experience = () => {
  return (
    <Section title="Experience" mtl>
      <VStack spacing={8} align='stretch'>
        {keplar}
        {interac2}
        {interac1}
        {wsib}
        {heka}
        {cac}
      </VStack>
    </Section>
  );
};

export default Experience;
