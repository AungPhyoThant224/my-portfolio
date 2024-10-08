import { useColorModeValue } from "@chakra-ui/react";

//Background
const primaryBackground = () => useColorModeValue("gray.50", "gray.800");

//Border
const primaryGradientBorder = () =>
  useColorModeValue(
    "linear(to-l, gray.50, red, gray.50)",
    "linear(to-l, gray.800, red.500, gray.800)"
  );
const primaryBorder = () => useColorModeValue("red", "red.500");
const terminalBorder = () => useColorModeValue("white", "white");
const stepperBorder = () => useColorModeValue("red", "whiteAlpha.900");

//Text
const primaryText = () => useColorModeValue("blackAlpha.700", "whiteAlpha.600");
const secText = () => useColorModeValue("red", "red.500");
const secHeading = () => useColorModeValue("blackAlpha.500", "whiteAlpha.600");

//Card
const primaryCard = () => useColorModeValue("gray.50", "gray.700");

//Button
const primaryBtnBackground = () => useColorModeValue("gray.100", "gray.700");
const primaryBtnBorder = () => useColorModeValue("red", "red.500");
const primaryBtnText = () => useColorModeValue("red", "red.500");
const telegramBtnBorder = () => useColorModeValue("#2BACEE", "#2BACEE");

export {
  //Background
  primaryBackground,

  //Border
  primaryGradientBorder,
  primaryBorder,
  terminalBorder,
  stepperBorder,

  //Text
  primaryText,
  secText,
  secHeading,

  //Card
  primaryCard,

  //Button
  primaryBtnBackground,
  primaryBtnBorder,
  primaryBtnText,
  telegramBtnBorder,
};
