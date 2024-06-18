import { Box, Text } from "@chakra-ui/react";
import { primaryGradientBorder } from "../theme/colors";

const Footer = () => {
  return (
    <>
      <Box
        bgGradient={primaryGradientBorder()}
        width={"100%"}
        height={"1px"}
      ></Box>
      <Box paddingY={5}>
        <Text>Designed and Build by Aung Phyo Thant.</Text>
      </Box>
    </>
  );
};

export default Footer;
