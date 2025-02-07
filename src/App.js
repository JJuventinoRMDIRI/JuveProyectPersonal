import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComp from './components/HeaderComp';
import IntroductionHome from './screens/IntroductionHome';
import AboutMe from './screens/AboutMe';
import ProfessionalExperience from './screens/ProfessionalExperience';
import EducationProfile from './screens/EducationProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeaderComp/>
      <Routes>
        <Route path="/About-Me" element={<AboutMe/>}/>
        <Route path="/Professional-Experience" element={<ProfessionalExperience/>}/>
        <Route path="/Education-Profile" element={<EducationProfile/>}/>
        <Route path="/" element={<IntroductionHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
