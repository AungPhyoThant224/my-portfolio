import { Box, Button, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { AungPhyoThant } from "../../assets/images";
import {
  primaryBtnBackground,
  primaryBtnBorder,
  primaryBtnText,
} from "../../theme/colors";

const Landing = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={3}
        alignItems={"center"}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="linear"
        >
          <Heading as={"h1"} fontSize={"4xl"}>
            We are looking forward to collaborate with you and turning your
            ideas into reality.
          </Heading>
          <Button
            as={"a"}
            colorScheme=""
            background={primaryBtnBackground()}
            color={primaryBtnText()}
            border="1px"
            borderColor={primaryBtnBorder()}
            marginY={2}
            href="#contact"
          >
            Tell us your idea
          </Button>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="700"
          data-aos-easing="linear"
        >
          <Image
            src={AungPhyoThant}
            width={"100%"}
            height={"100%"}
            className="bounce"
            alt="typing"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Landing;
