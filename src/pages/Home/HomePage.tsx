import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Hero from "../../components/sections/Hero";
import { primaryBackground } from "../../theme/colors";

const HomePage = () => {
  return (
    <>
      <Section
        id="nav-bar"
        maxWidth="1140px"
        background={primaryBackground()}
        as={"nav"}
      >
        <NavBar />
      </Section>
      <Section
        id="hero"
        maxWidth="1140px"
        // minHeight="100vh"
        display="flex"
        background={primaryBackground()}
        as={"section"}
      >
        <Hero />
      </Section>
      <Section
        id="footer"
        maxWidth="1140px"
        background={primaryBackground()}
        as={"footer"}
      >
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
