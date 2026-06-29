import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import TeckStackSection from "../components/TechStackSection/TechStackSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <hr className="divider"/>
      <ExpertiseSection />
      <hr className="divider"/>
      <ProjectSection />
      <hr className="divider"/>
      <TeckStackSection />
      <hr className="divider"/>
      <AboutUsSection />
      <hr className="divider"/>
      <ContactSection />
      <hr className="divider"/>

    </>
  );
};
export default HomePage;
