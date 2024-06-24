import { Box, Text } from "@chakra-ui/react";
import { primaryGradientBorder } from "../theme/colors";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <Box
        bgGradient={primaryGradientBorder()}
        width={"100%"}
        height={"1px"}
      ></Box>
      <Box paddingY={5} textAlign={"center"}>
        <Text>&copy; {currentYear} Aung Phyo Thant. All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
