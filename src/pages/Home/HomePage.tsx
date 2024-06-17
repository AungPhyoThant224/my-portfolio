import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Landing from "../../components/sections/Landing";
import { primaryBackground } from "../../theme/colors";

const HomePage = () => {
  return (
    <>
      <Section
        id="nav-bar"
        maxWidth="1200px"
        background={primaryBackground()}
        as={"nav"}
      >
        <NavBar />
      </Section>
      <Section
        id="landing"
        maxWidth="1200px"
        background={primaryBackground()}
        as={"section"}
      >
        <Landing />
      </Section>
      <Section
        id="footer"
        maxWidth="1200px"
        background={primaryBackground()}
        as={"footer"}
      >
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
