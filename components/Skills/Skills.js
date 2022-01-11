import React from "react";
import Section from "../../containers/Section/Section";
import SkillCard from "../../containers/SkillCard/SkillCard";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/layout";

const listSkills = [
  { img: "reactjs-icon.svg", text: "React", link: "https://reactjs.org" },
  { img: "next-js.svg", text: "Next.js", link: "https://nextjs.org" },
  { img: "nodejs.svg", text: "Node.js", link: "https://nodejs.org/en/" },
  { img: "java-icon.svg", text: "Java", link: "https://www.java.com/en/" },
];

const Skills = () => {
  return (
    <Section title="Skills" separator>
      <VStack spacing={8} align="start">
        <Text align="left">
          I&apos;m always looking to expand my skillset and familiarize with new
          technologies and languages, but here is what I&apos;m most familiar
          with!
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="md" w="100%">
          {listSkills.map((sk, i) => (
            <GridItem colSpan={{ base: 2, lg: 1 }} key={i}>
              <SkillCard img={sk.img} text={sk.text} link={sk.link} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
};

export default Skills;
