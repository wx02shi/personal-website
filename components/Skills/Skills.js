import React from "react";
import Section from "../../containers/Section/Section";
import SkillCard from "../../containers/SkillCard/SkillCard";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/layout";

const listSkills = [
  { img: "reactjs-icon.svg", text: "React" },
  { img: "next-js.svg", text: "Next.js" },
  { img: "nodejs.svg", text: "Node.js" },
  { img: "java-icon.svg", text: "Java" },
];

const Skills = () => {
  return (
    <Section title="Skills" separator>
      <VStack spacing={8} align="start">
        <Text>
          I&apos;m always looking to expand my skillset and familiarize with new
          technologies and languages, but here is what I&apos;m most familiar
          with!
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="md" w="100%">
          {listSkills.map((sk, i) => (
            <GridItem colSpan={{ base: 2, lg: 1 }} key={i}>
              <SkillCard img={sk.img} text={sk.text} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
};

export default Skills;
