import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import parse from "html-react-parser";
import skill from "../../data/skills";
import Terminal from "../Terminal";

const Skill = () => {
  return (
    <>
      <Heading
        as={"h2"}
        fontSize={"3xl"}
        textAlign={"center"}
        paddingBottom={{ base: 4, lg: 8 }}
      >
        {parse(skill.title)}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, md: 10 }}
        style={{ alignContent: "stretch" }}
      >
        <Box data-aos="fade-up">
          <Terminal title={skill.focusOn.title} height={"100%"}>
            <SimpleGrid
              padding={{ base: 3, sm: 6 }}
              spacing={{ base: 3, sm: 6 }}
              columns={{ base: 4 }}
            >
              {skill.focusOn.languages.map((lan, idx) => (
                <Image
                  key={idx}
                  margin={"auto"}
                  src={lan.src}
                  alt={lan.alt}
                  maxWidth={{ base: "80px" }}
                  maxHeight={{ base: "80px" }}
                  width={"100%"}
                />
              ))}
            </SimpleGrid>
          </Terminal>
        </Box>
        <Box data-aos="fade-up">
          <Terminal title={skill.familiarWith.title} height={"100%"}>
            <SimpleGrid
              padding={{ base: 3, sm: 6 }}
              spacing={{ base: 3, sm: 6 }}
              columns={{ base: 4 }}
            >
              {skill.familiarWith.languages.map((lan, idx) => (
                <Image
                  key={idx}
                  margin={"auto"}
                  src={lan.src}
                  alt={lan.alt}
                  maxWidth={{ base: "80px" }}
                  maxHeight={{ base: "80px" }}
                  width={"100%"}
                />
              ))}
            </SimpleGrid>
          </Terminal>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Skill;
