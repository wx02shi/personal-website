import React from "react";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";

const SkillCard = ({ img, text, link }) => {
  return (
    <LinkBox
      align="center"
      justify="center"
      bg={useColorModeValue("gray.100", "gray.600")}
      borderRadius={4}
      p={2}
      spacing={4}
      w="100%"
    >
      <LinkOverlay href={link} isExternal>
        <Image src={img} alt={text} boxSize="2.25rem" />
        <Text fontWeight="semibold" pt={1}>
          {text}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export default SkillCard;
