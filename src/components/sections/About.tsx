import { Box, Flex, Image, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
import { about } from "../../data/about";
import { secHeading } from "../../theme/colors";

const About = () => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column-reverse", lg: "row" }}
    >
      <Box
        maxWidth={{ base: "300px", lg: "auto" }}
        textAlign={"center"}
        margin={{ base: "auto", lg: 0 }}
        borderRadius={"xl"}
      >
        <Image
          className="custom-box-shadow"
          borderTopRadius={"xl"}
          src={about.image}
          alt="Aung Phyo Thant"
        />
        <Text fontSize={"xl"} marginTop={3}>
          {parse(about.name)}
        </Text>
        <Text color={secHeading()}>{parse(about.position)}</Text>
      </Box>
      <Box
        marginLeft={{ base: 0, lg: 10 }}
        marginBottom={{ base: 10, lg: 0 }}
        borderRadius={"xl"}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {parse(about.title)}
        </Text>
        <Text fontSize={"xl"}>{parse(about.text)}</Text>
      </Box>
    </Flex>
  );
};

export default About;
