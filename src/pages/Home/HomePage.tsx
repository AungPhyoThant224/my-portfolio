import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import Experience from "../../components/sections/Experience";
import Hero from "../../components/sections/Hero";
import Skill from "../../components/sections/Skill";
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
        display="flex"
        background={primaryBackground()}
        paddingTop={{ base: 32, md: 40, lg: 48, xl: 56 }}
        as={"section"}
      >
        <Hero />
      </Section>
      <Section
        id="about"
        maxWidth="1140px"
        display="flex"
        background={primaryBackground()}
        paddingTop={{ base: 20, md: 24, lg: 32, xl: 40 }}
        as={"section"}
      >
        <About />
      </Section>
      <Section
        id="skill"
        maxWidth="950px"
        display="flex"
        background={primaryBackground()}
        paddingTop={{ base: 20, md: 24, lg: 32, xl: 40 }}
        as={"section"}
      >
        <Skill />
      </Section>
      <Section
        id="experience"
        maxWidth="950px"
        display="flex"
        background={primaryBackground()}
        paddingTop={{ base: 20, md: 24, lg: 32, xl: 40 }}
        as={"section"}
      >
        <Experience />
      </Section>
      <Section
        id="contact"
        maxWidth="950px"
        display="flex"
        background={primaryBackground()}
        paddingTop={{ base: 20, md: 24, lg: 32, xl: 40 }}
        paddingBottom={{ base: 20, md: 24, lg: 32, xl: 40 }}
        as={"section"}
      >
        <Contact />
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
