import React from "react";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/layout";

const ProjectCard = ({ img, title, text, link }) => {
  return (
    <LinkBox
      align="center"
      justify="center"
      bg={useColorModeValue("gray.100", "gray.700")}
      borderRadius={4}
      borderWidth={1}
      spacing={4}
      w="100%"
      overflow="hidden"
    >
      <LinkOverlay href={link} isExternal>
        <Image
          src={img}
          alt={text}
          bg={useColorModeValue("white", "gray.800")}
          boxSize="13rem"
          objectFit="cover"
          w="100%"
        />
      </LinkOverlay>
      <Text p={4} pb={0} align="left" fontWeight="semibold">{title}</Text>
      <Text p={4} pt={1} align="left">{text}</Text>
    </LinkBox>
  );
};

export default ProjectCard;
