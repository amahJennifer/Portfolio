import React from 'react';
import FirstSection from "./Components/firstSection/FirstSection"
import './App.css';
import AboutSection from './Components/aboutSection/AboutSection';
import ExperienceSection from './Components/experienceSection/ExperienceSection';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <AboutSection />
      <ExperienceSection/>
    </div>
  );
}

export default App;
