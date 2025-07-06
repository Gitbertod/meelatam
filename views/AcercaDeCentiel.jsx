import React from "react";
import NavBar from "../components/navbar/NavBar";
import ParallaxHero from "../components/parallaxHero/ParallaxHero";
import SectionComponent2 from "../components/sectionComponent2/SectionComponent2";
import PhotoSection from "../components/photoSection/PhotoSection";
import TextSection from "../components/textSection/TextSection";
import CardParallax from "../components/cardParallax/CardParallax";
import TextSectionDual from "../components/textSectionDual/TextSectionDual";


const AcercaDeCentiel = () => {
  return (
    <>
      <NavBar></NavBar>
      <ParallaxHero />
      <SectionComponent2>
        <TextSectionDual/>
      </SectionComponent2>
      <CardParallax />
    </>
  );
};

export default AcercaDeCentiel;
