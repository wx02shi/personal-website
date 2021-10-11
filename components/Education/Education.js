import React from "react";
import Section from "../../containers/Section/Section";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";

const university = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">University of Waterloo</Heading>
    <Text>Bachelor's in Computer Science, Sept 2020 - Present</Text>
    <Text>Participating in UW's coop program.</Text>
  </VStack>
);

const ib = (
  <VStack align="start" spacing={4}>
    <Heading size="lg">International Baccalaureate Programme</Heading>
    <Text>Victoria Park C.I., 2016 - 2020</Text>
    <Text>
      HL courses: Mathematics, English A (Language and Literature), Computer
      Science <br />
      SL courses: Physics, Chemistry, Economics, French B <br />
      39/45 points
    </Text>
  </VStack>
);

const Education = () => {
  return (
    <Section title="Education">
      <VStack align="start" spacing={8}>
        {university}
        {ib}
      </VStack>
    </Section>
  );
};

export default Education;
