import React from "react";
import { useState, useEffect } from "react";
import LogoSVG from "../../components/logoSVG/LogoSVG";
import NavBar from "../../components/navbar/NavBar";
import Container from "../../components/container/Container";
import SectionComponent from "../../components/sectionComponent/SectionComponent";
import SectionComponent2 from "../../components/sectionComponent2/SectionComponent2";
import PhotoSection from "../../components/photoSection/PhotoSection";
import TextSection from "../../components/textSection/TextSection";
import NewsCarousel from "../../components/newsCarrousel/NewsCarousel";
import StatsSection from "../../components/statsSection/StatsSection";
import Footer from "../../components/footer/FooterComponent";
import { Button } from "flowbite-react";
import FooterComponent from "../../components/footer/FooterComponent";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Duración total de tu animación: 2s (drawSVG) + 0.3s delay + 0.8s (fill) = 3.1s
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3.5 segundos

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex w-screen  h-screen justify-center ">
        <LogoSVG />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <Container />
      <SectionComponent />
      <SectionComponent2>
        <PhotoSection title={"TSE"} image={"./TSE_3.png"} />
        <TextSection title={"Título aqui"} />
      </SectionComponent2>
      <SectionComponent2>
        <TextSection title={"Título aqui"} />
        <PhotoSection title={"TVA 1"} image={"./TVA_1.png"} />
      </SectionComponent2>
      <StatsSection></StatsSection>
      
      <NewsCarousel></NewsCarousel>
      
    </>
  );
};

export default Home;
