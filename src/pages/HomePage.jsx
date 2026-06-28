import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import TeckStackSection from "../components/TechStackSection/TechStackSection";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <HeroSection />
      <hr class="divider"/>
      <ExpertiseSection />
      <hr class="divider"/>
      <ProjectSection />
      <hr class="divider"/>
      <TeckStackSection />
      <hr class="divider"/>
      <AboutUsSection />
      <hr class="divider"/>
      <ContactSection />
      <hr class="divider"/>

    </>
  );
};
export default HomePage;
