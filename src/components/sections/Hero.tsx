import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import hero from "../../data/hero";
import { primaryBtnBorder, primaryBtnText } from "../../theme/colors";
import Terminal from "../Terminal";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={3}
        alignItems={"center"}
      >
        <Box marginBottom={{ base: 4, md: 0 }}>
          <Text
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="linear"
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            {parse(hero.text.hello)}
          </Text>
          <Heading
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-easing="linear"
            as={"h1"}
            fontSize={{ base: "3xl", sm: "4xl" }}
            paddingY={3}
          >
            {parse(hero.text.name)}
          </Heading>
          <Text
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-easing="linear"
            fontSize={{ base: "xl", sm: "2xl" }}
          >
            {parse(hero.text.about)}
          </Text>

          <HStack spacing={5} paddingY={5}>
            {hero.socials.map((social, idx) => (
              <Link key={idx} href={social.url} target="blank">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay={700 + idx * 100}
                  data-aos-easing="linear"
                  src={
                    colorMode === "dark"
                      ? social.image.dark
                      : social.image.light
                  }
                  width={"100%"}
                  height={"100%"}
                  alt={social.image.alt}
                />
              </Link>
            ))}
          </HStack>
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-easing="linear"
          >
            <Button
              className="custom-box-shadow"
              colorScheme=""
              color={primaryBtnText()}
              border="1px"
              borderColor={primaryBtnBorder()}
              marginY={2}
            >
              Get Resume
            </Button>
          </Box>
        </Box>
        <Box
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-easing="linear"
        >
          <Terminal title={hero.terminal.title}>
            <Box
              p={4}
              paddingBottom={20}
              fontFamily="monospace"
              fontSize={{ base: "xs" }}
              bg="black"
              whiteSpace={"pre-wrap"}
              color={"white"}
            >
              {parse(hero.terminal.code)}
            </Box>
          </Terminal>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Hero;
