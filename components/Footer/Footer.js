import React from "react";
import { Box, Link } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box pb={6}>
      Created with <Link href="https://nextjs.org/">Next.js</Link> and{" "}
      <Link href="https://chakra-ui.com/">Chakra UI</Link>
    </Box>
  );
};

export default Footer;
