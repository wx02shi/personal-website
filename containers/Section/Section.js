import React from "react";
import { Image } from "@chakra-ui/react";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const Section = ({ bg, title, image, description, children }) => {
  return (
    <HStack w="100%" bg={bg} align="flex-start">
      <VStack h="100%" w="45%">
        {title && <Text>{title.toUpperCase()}</Text>}
        {image && (
          <Image src={image.src} alt={image.alt} borderRadius={image.radius} />
        )}
      </VStack>
      <VStack>
        {description && <Text>{description}</Text>}
        {children}
      </VStack>
    </HStack>
  );
};

export default Section;
