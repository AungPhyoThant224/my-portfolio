import Footer from "../../components/Footer";
import Landing from "../../components/sections/Landing";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import { bgGray, bgWhite } from "../../theme/colors";

const HomePage = () => {
  return (
    <>
      <Section id="nav-bar" maxWidth="1200px" background={bgWhite()} as={"nav"}>
        <NavBar />
      </Section>
      <Section
        id="landing"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Landing />
      </Section>
      <Section
        id="footer"
        maxWidth="1200px"
        background={bgWhite()}
        as={"footer"}
      >
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
