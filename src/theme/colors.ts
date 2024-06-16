import { useColorModeValue } from "@chakra-ui/react";

//Background
const bgWhite = () => useColorModeValue("white", "gray.900");
const bgGray = () => useColorModeValue("gray.50", "gray.800");

//Text
const secHeading = () => useColorModeValue("blackAlpha.400", "whiteAlpha.600");
const text = () => useColorModeValue("blackAlpha.700", "whiteAlpha.600");
const secText = () => useColorModeValue("red", "red");

//Card
const cardWhite = () => useColorModeValue("white", "gray.700");

//Button
const btnBg = () => useColorModeValue("gray.50", "gray.800");
const btnBorder = () => useColorModeValue("red", "red");
const btnText = () => useColorModeValue("red", "red");

export {
  //Background
  bgWhite,
  bgGray,

  //Text
  secHeading,
  text,
  secText,

  //Card
  cardWhite,

  //Button
  btnBg,
  btnBorder,
  btnText,
};
