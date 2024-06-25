import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import contact from "../../data/contact";
import { primaryCard, secHeading } from "../../theme/colors";

const Contact = () => {
  const { colorMode } = useColorMode();
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
      <Box data-aos="zoom-in">
        <Box
          className="custom-box-shadow"
          borderRadius={"xl"}
          textAlign={"center"}
          background={primaryCard()}
          paddingY={5}
          paddingX={{ base: 5, sm: 8 }}
        >
          <Text fontSize={{ base: "lg", sm: "xl" }}>
            {parse(contact.intro)}
          </Text>
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
                target={button.platform == "Mail" ? "_self" : "_blank"}
                href={button.url}
                key={idx}
                leftIcon={
                  <Image
                    maxW={"80%"}
                    src={
                      colorMode === "dark"
                        ? button.image.dark
                        : button.image.light
                    }
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
      </Box>
    </>
  );
};

export default Contact;
