import React from 'react';
import FirstSection from "./Components/firstSection/FirstSection"
import './App.css';
import AboutSection from './Components/aboutSection/AboutSection';
import ExperienceSection from './Components/experienceSection/ExperienceSection';
import EducationSection from './Components/educationSection/EducationSection';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}

export default App;
