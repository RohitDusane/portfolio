// // import "./App.css";

// // function App() {
// //   return <main></main>;
// // }

// // export default App;





// import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
// import ContactMeMain from "./components/contactMeSection/ContactMeMain";
// import ExperienceMain from "./components/experienceSection/ExperienceMain";
// import FooterMain from "./components/footer/FooterMain";
// import HeroGradient from "./components/heroSection/HeroGradient";
// import HeroMain from "./components/heroSection/HeroMain";
// import NavbarMain from "./components/navbar/NavbarMain";
// import ProjectsMain from "./components/projectsSection/ProjectsMain";
// import SkillsMain from "./components/skillsSection/SkillsMain";
// import SubSkills from "./components/skillsSection/SubSkills";
// import SubHeroMain from "./components/subHeroSection/SubHeroMain";

// function App() {
//   return (
//     <main className="font-body text-white relative overflow-hidden">
//       <NavbarMain />
//       <HeroMain />
//       <HeroGradient />
//       <SubHeroMain />
//       <AboutMeMain />
//       <SkillsMain />
//       <SubSkills />
//       <ExperienceMain />
//       <ProjectsMain />
//       <ContactMeMain />
//       <FooterMain />
//     </main>
//   );
// }

// export default App;







// src/App.js
import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
//import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import CertificationsMain from "./components/certifiationSection/CertificationsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import ThemeToggle from './components/ThemeToggle'; // adjust the path as needed


function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      {/* <SubSkills /> */}
      <ExperienceMain />
      <ProjectsMain />
      <CertificationsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}
  function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-black">
        <h1 className="text-2xl font-bold text-black dark:text-white">My Portfolio</h1>
        <ThemeToggle />
      </nav>
    );

}

export default App;
