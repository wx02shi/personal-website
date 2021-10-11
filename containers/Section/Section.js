import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/layout";

const Section = ({ bg, title, separator, mtl, mbl, image, children }) => {
  return (
    <Box bg={bg}>
      <Box px={12} pb={mbl ? 24 : 12}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          pt={mtl ? 24 : 12}
          maxW="container.lg"
          borderTop={separator && "1px"}
          borderColor="gray.200"
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
                mt={2}
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
    </Box>
  );
};

export default Section;
