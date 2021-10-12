import React, { useState, useEffect } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Fade, Portal, IconButton } from "@chakra-ui/react";
import { Box, VStack } from "@chakra-ui/layout";

const AffixMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <VStack position="fixed" bottom={6} right={6}>
      <Fade in={scrollPos > 300}>
        <IconButton
          aria-label="Back to top"
          icon={<ChevronUpIcon h={8} w={8} />}
          size="lg"
          bg={useColorModeValue("gray.200", "gray.700")}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </Fade>

      <IconButton
        aria-label="Toggle mode"
        size="lg"
        onClick={toggleColorMode}
        bg={useColorModeValue("gray.200", "gray.700")}
        icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      />
    </VStack>
  );
};

export default AffixMenu;
