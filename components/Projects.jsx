import React from "react";
import Section from "../layouts/Section";
import ProjectCard from "../layouts/ProjectCard";
import { Grid, GridItem, VStack } from "@chakra-ui/layout";

const listProjects = [
  { img: "bitnet.png", title: "BitNet b1.58", text: "Implemented Microsoft's BitNet LLM: uses ternary [-1,0,1] weights instead of floats", link: "https://github.com/wx02shi/bitnet" },
  { img: "zkml.svg", title: "ZKML", text: "Undergrad Research Assistant: exploring zero-knowledge proofs for ML execution", link: "" },
  { img: "siren.jpg", title: "Smart Contract Analyzer", text: "ETHGlobal Waterloo Winner: Generates sequence diagrams on Solidity programs", link: "https://ethglobal.com/showcase/siren-yso0v" },
  { img: "congestion.png", title: "Urban Congestion Modeling", text: "MacHacks 2022 Winner: CNN determines traffic congestion from satellite images", link: "https://devpost.com/software/using-context-aware-cnn-to-model-congestion-in-urban-areas" },
  { img: "nodes.png", title: "Network Membership Protocol", text: "Network failure detection and message dissemination via gossip protocol multicasting", link: "https://github.com/wx02shi/Failure-Detection-Membership-Protocol" },
  { img: "chess.png", title: "Chess Project", text: "command-line chess game, built with C++. Incorporates OOP and design patterns", link: "https://github.com/wx02shi/chess-command-line" },
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
