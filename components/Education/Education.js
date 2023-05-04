import React from "react";
import Section from "../../layouts/Section/Section";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const university = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      University of Waterloo
    </Heading>
    <Text>Bachelor&apos;s in Computer Science, Sept 2020 - Present</Text>
    <Text>
      Participating in UW&apos;s coop program. 91% cumulative average.
    </Text>
  </VStack>
);

const ib = (
  <VStack align="start" spacing={4}>
    <Heading align="left" size="lg">
      International Baccalaureate Programme
    </Heading>
    <Text>Victoria Park C.I., Sept 2018 - May 2020</Text>
    <Text align="left">
      HL courses: Mathematics, English A (Language and Literature), Computer
      Science <br />
      SL courses: Physics, Chemistry, Economics, French B <br />
      39/45 points
    </Text>
  </VStack>
);

const Education = () => {
  return (
    <Section title="Education" mtl>
      <VStack align="start" spacing={8}>
        {university}
        {ib}
      </VStack>
    </Section>
  );
};

export default Education;
