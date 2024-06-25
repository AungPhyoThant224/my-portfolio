import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Terminal from "../../components/Terminal";
import navBar from "../../data/navBar";
import { primaryBackground, primaryGradientBorder } from "../../theme/colors";

const ErrorPage = () => {
  return (
    <Box background={primaryBackground()} height={"100vh"}>
      <Section
        id="nav-bar"
        maxWidth="1140px"
        background={primaryBackground()}
        as={"nav"}
      >
        <Grid templateColumns="230px auto" alignItems={"center"}>
          <GridItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box textAlign={"center"} width={"fit-content"} paddingY={5}>
                <Text fontFamily={"Tiny5"} fontWeight={"bold"} fontSize={"3xl"}>
                  {parse(navBar.title)}
                </Text>
              </Box>
            </Link>
          </GridItem>
        </Grid>
        <Box
          bgGradient={primaryGradientBorder()}
          width={"100%"}
          height={"1px"}
        ></Box>
      </Section>
      <Section
        id="Error"
        maxWidth="1140px"
        background={primaryBackground()}
        as={"section"}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="linear"
          height={"100vh"}
          width={"fit-content"}
          margin={"auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Terminal title="Error.js">
            <Box textAlign={"center"} padding={8}>
              <Text
                fontSize={{ base: "7xl", sm: "9xl" }}
                fontFamily={"monospace"}
                lineHeight={1}
                color={"whiteAlpha.900"}
              >
                OOPS!
              </Text>
              <Text
                fontFamily={"monospace"}
                fontSize={{ base: "xl", sm: "3xl" }}
                color={"whiteAlpha.900"}
              >
                Something went wrong.
              </Text>
            </Box>
          </Terminal>
          <Box marginY={4}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {"<- Go Back"}
            </Link>
          </Box>
        </Box>
      </Section>
    </Box>
  );
};

export default ErrorPage;
