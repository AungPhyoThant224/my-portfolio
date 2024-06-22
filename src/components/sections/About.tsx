import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
import about from "../../data/about";
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
          src={about.image.src}
          alt={about.image.alt}
        />
        <Text fontSize={"xl"} marginTop={3}>
          {parse(about.name)}
        </Text>
        <Text color={secHeading()}>{parse(about.position)}</Text>
      </Box>
      <Box
        marginLeft={{ base: 0, lg: 10 }}
        marginBottom={{ base: 10, lg: 0 }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Heading paddingBottom={4} as={"h2"} fontSize={"3xl"}>
          {parse(about.title)}
        </Heading>
        <Text paddingBottom={4} fontSize={"xl"}>
          {parse(about.first_paragraph)}
        </Text>
        <Text paddingBottom={4} fontSize={"xl"}>
          {parse(about.second_paragraph)}
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
