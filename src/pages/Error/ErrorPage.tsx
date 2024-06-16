import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import { bgGray, bgWhite } from "../../theme/colors";
import { AungPhyoThant } from "../../assets/images";

const ErrorPage = () => {
  return (
    <Box background={bgGray()} height={"100vh"}>
      <Section id="nav-bar" maxWidth="1200px" background={bgWhite()} as={"nav"}>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                textAlign={"center"}
                width={"fit-content"}
                paddingTop={5}
                paddingBottom={6}
              >
                Home
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Section>
      <Section
        id="Error"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Box>
          <Image
            data-aos="zoom-in"
            src={AungPhyoThant}
            alt="404"
            width={620}
            height={"100%"}
            margin={"auto"}
          />
        </Box>
      </Section>
    </Box>
  );
};

export default ErrorPage;
