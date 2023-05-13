import React from "react";
import { Box, Link, Stack } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Stack>
      <Box>
        Created with{" "}
        <Link href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra UI
        </Link>
      </Box>
      <Box pb={6}>
        <Link
          href="https://github.com/wx02shi/personal-website"
          isExternal
          fontStyle="italic"
        >
          View the code for this website!
        </Link>
      </Box>
    </Stack>
  );
};

export default Footer;
