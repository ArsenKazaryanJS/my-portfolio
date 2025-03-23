import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { SkillsSection } from "./components/SkilsSection/SkillsSection";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <HeroSection/>
     <AboutMe/>
     <ProjectsSection/>
     <SkillsSection/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
