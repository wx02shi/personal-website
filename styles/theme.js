import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: true,
  fonts: {
    body: `'Lato', sans-serif`,
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
