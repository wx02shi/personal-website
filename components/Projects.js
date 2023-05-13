import React from "react";
import Section from "../../layouts/Section/Section";
import ProjectCard from "../../layouts/ProjectCard/ProjectCard";
import { Grid, GridItem, VStack } from "@chakra-ui/layout";

const listProjects = [
    { img: "congestion.png", title: "Urban Congestion Modeling", text: "CNN determines traffic congestion from satellite images. Winner of MacHacks 2022", link: "https://devpost.com/software/using-context-aware-cnn-to-model-congestion-in-urban-areas" },
    { img: "nodes.png", title: "Network Membership Protocol", text: "Network failure detection and message dissemination via gossip protocol multicasting", link: "https://github.com/wx02shi/Failure-Detection-Membership-Protocol" },
    { img: "chess.png", title: "Chess Project", text: "command-line chess game, built with C++. Incorporates OOP and design patterns", link: "https://github.com/wx02shi/chess-command-line" },
    { img: "personal.png", title: "Personal Website", text: "You're seeing it right now! Made with Next.js, Chakra UI, and deployed on Vercel.", link: "https://github.com/wx02shi/personal-website" },
]

const Projects = () => {
  return (
    <Section title="Projects" separator>
      <VStack spacing={2} align="start">
        <Grid templateColumns="repeat(4, 1fr)" gap={10} w="100%">
          {listProjects.map((sk, i) => (
            <GridItem colSpan={{ base: 2, lg: 2 }} key={i} >
              <ProjectCard img={sk.img} title={sk.title} text={sk.text} link={sk.link} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
};

export default Projects;
