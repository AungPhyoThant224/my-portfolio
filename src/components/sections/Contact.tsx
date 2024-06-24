import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import contact from "../../data/contact";
import { secHeading } from "../../theme/colors";

const Contact = () => {
  return (
    <>
      <Heading
        as={"h2"}
        fontSize={"3xl"}
        textAlign={"center"}
        paddingBottom={{ base: 4, lg: 8 }}
      >
        {parse(contact.title)}
      </Heading>
      <Box
        className="custom-box-shadow"
        borderRadius={"xl"}
        textAlign={"center"}
        paddingY={5}
        paddingX={{ base: 5, sm: 8 }}
      >
        <Text fontSize={{ base: "lg", sm: "xl" }}>{parse(contact.intro)}</Text>
        <SimpleGrid
          columns={{ base: 1, "32em": 2 }}
          width={"fit-content"}
          marginX={"auto"}
          marginY={16}
          gap={{ base: 5, "32em": 0 }}
          justifyItems={"center"}
        >
          {contact.buttons.map((button, idx) => (
            <Button
              as={"a"}
              target={"_blank"}
              href={button.url}
              key={idx}
              leftIcon={
                <Image
                  maxW={"80%"}
                  src={button.image.dark}
                  alt={button.image.alt}
                />
              }
              colorScheme=""
              color={button.color()}
              border="1px"
              borderColor={button.color()}
            >
              {button.label}
            </Button>
          ))}
        </SimpleGrid>
        <Text fontSize={{ base: "lg", sm: "xl" }} color={secHeading()}>
          {parse(contact.conclusion)}
        </Text>
      </Box>
    </>
  );
};

export default Contact;
