import React from "react";
import NavBar from "../../components/navbar/NavBar";
import HeroSection from "../../components/heroSection/HeroSection";
import SectionComponent2 from "../../components/sectionComponent2/SectionComponent2";
import TextSection from "../../components/textSection/TextSection";
import PhotoSection from "../../components/photoSection/PhotoSection";
import styles from "./Nosotros.module.css";
import StatsSection from "../../components/statsSection/StatsSection";
import FooterComponent from "../../components/footer/FooterComponent";
import CardParallax from "../../components/cardParallax/CardParallax";
import AboutText from "../../components/aboutText/AboutText";

const Nosotros = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        title={"Nosotros"}
        parafo={"¡ENCONTRAR UNA SOLUCIÓN PERMANENTE ES NUESTRO OBJETIVO!"}
        backgroundImage={"/heroNews.jpg"}
      />
      <div className="flex justify-center h-vh flex-col md:flex-row">
        <AboutText />
        <img src="/person.jpg" alt="" className={styles.shape} />
      </div>
      <CardParallax />
      <StatsSection />
      <FooterComponent />
    </>
  );
};

export default Nosotros;
