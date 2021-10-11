import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/layout";

const Section = ({ bg, title, image, children }) => {
  return (
    <Box bg={bg}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        px={12}
        py={24}
        maxW="container.lg"
      >
        <GridItem align="start" colSpan={1}>
          {title && (
            <Text
              fontSize="xl"
              fontWeight="bold"
              letterSpacing="widest"
              textDecorationLine="underline"
              textDecorationColor="blue.400"
              textDecorationThickness="0.25rem"
              textUnderlineOffset="0.5rem"
            >
              {title.toUpperCase()}
            </Text>
          )}
          {image && (
            <Image
              boxSize="120px"
              src={image.src}
              alt={image.alt}
              borderRadius={image.radius}
            />
          )}
        </GridItem>

        {children && (
          <GridItem align="start" colSpan={3}>
            {children}
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default Section;
