import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import parse from "html-react-parser";
import { familiarWith, focusOn, title } from "../../data/skills";
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
        {parse(title)}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, md: 10 }}
        style={{ alignContent: "stretch" }}
      >
        <Terminal title={focusOn.title}>
          <SimpleGrid
            padding={{ base: 3, sm: 6 }}
            spacing={{ base: 3, sm: 6 }}
            columns={{ base: 4 }}
          >
            {focusOn.languages.map((lan, idx) => (
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
        <Terminal title={familiarWith.title}>
          <SimpleGrid
            padding={{ base: 3, sm: 6 }}
            spacing={{ base: 3, sm: 6 }}
            columns={{ base: 4 }}
          >
            {familiarWith.languages.map((lan, idx) => (
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
      </SimpleGrid>
    </>
  );
};

export default Skill;
