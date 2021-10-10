import React from "react";
import { Center, HStack } from "@chakra-ui/layout";

const navItems = ["Home", "About", "Resume", "Works"];

const Navbar = () => {
  return (
    <Center maxW="container.md">
      <HStack>
        {navItems.map((navItem, i) => {
          return <div key={i}>{navItem.toUpperCase()}</div>;
        })}
      </HStack>
    </Center>
  );
};

export default Navbar;
