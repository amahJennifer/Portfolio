import React from 'react';
import FirstSection from "./Components/firstSection/FirstSection"
import './App.css';
import AboutSection from './Components/aboutSection/AboutSection';
import ExperienceSection from './Components/experienceSection/ExperienceSection';
import EducationSection from './Components/educationSection/EducationSection';
import SkillsSection from "./Components/skillsSection/SkillsSection"
import ContactSection from "./Components/contactSection/ContactSection"
function App() {
  return (
    <div className="App">
      <FirstSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection/>
    </div>
  );
}

export default App;
