import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const breakpoints = {
  base: "0em",
  sm: "30em",
  "32em": "32em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({
  config,
  breakpoints,
});
export default theme;
