import React from "react";
import Section from "../../containers/Section/Section";
import ProjectCard from "../../containers/ProjectCard/ProjectCard";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/react";

const listProjects = [
    { img: "digitClass.png", title: "Digit Classification", text: "Made only with numpy, no ML packages. Exploring the math behind the layers!", link: "https://github.com/wx02shi/digit-classification" },
    { img: "chess.png", title: "Chess Project", text: "command-line chess game, built with C++. Incorporates OOP and design patterns", link: "https://github.com/wx02shi/chess-command-line" },
    { img: "solidity.png", title: "Data Structures in Solidity", text: "Common data structures implemented in Solidity. Terrible experience, highly recommended.", link: "https://github.com/wx02shi/data-structures-in-solidity" },
    { img: "personal.png", title: "Personal Website", text: "You're seeing it right now! Made with Next.js, Chakra UI, and deployed on Vercel.", link: "https://github.com/wx02shi/personal-website" },
    { img: "pokedex.png", title: "Online Pokedex", text: "A simple, web pokedex. Made with PokeAPI and TailwindCSS.", link: "https://pokedex-git-main-williamsxz99.vercel.app/" },
    { img: "gumball.png", title: "Museum of Candy", text: "A showcase of UI design skills, built with HTML and Bootstrap.", link: "https://awesome-wright-30b24a.netlify.app/" },
]

const Projects = () => {
  return (
    <Section title="Projects" separator>
      <VStack spacing={2} align="start">
        <Grid templateColumns="repeat(6, 1fr)" gap={10} w="100%">
          {listProjects.map((sk, i) => (
            <GridItem colSpan={{ base: 3, lg: 2 }} key={i}>
              <ProjectCard img={sk.img} title={sk.title} text={sk.text} link={sk.link} />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
};

export default Projects;
