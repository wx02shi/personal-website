import { extendTheme } from "@chakra-ui/react";

const font = `'DM Sans Variable', sans-serif`;

const config = {
  useSystemColorMode: true,
  fonts: {
    body: font,
    heading: font,
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
