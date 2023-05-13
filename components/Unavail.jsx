import React from "react";
import { Center, Heading } from "@chakra-ui/layout";

const Unavail = () => {
  return (
    <Center h="100vh" p={24} display={{ base: "flex", md: "none" }}>
      <Heading>
        The mobile version of this page is coming soon! Sorry for the
        inconvenience.
      </Heading>
    </Center>
  );
};

export default Unavail;
