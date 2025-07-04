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
import MultipleSwiper from "../../components/multipleSwiper/MultipleSwiper";
import {
  partners,
  partners2,
  partners3,
  partners4,
} from "../../components/multipleSwiper/logos";

const Nosotros = () => {
  const myCards = [
    {
      title: "Respaldo de energía",
      subtitle: "",
      img: "/Respaldo-de-energia_2-2048x1365.webp",
      text: "Soluciones integrales para una operación continua, incluyendo UPS, baterías, y generadores. Garantizamos seguridad y eficiencia energética en momentos críticos.",
    },
    {
      title: "Servicios",
      subtitle: "",
      img: "/Servicios_1-2048x1365.webp",
      text: "Ofrecemos un espectro completo de servicios, desde mantenimiento preventivo y correctivo hasta soluciones de emergencia y outsourcing, garantizando el óptimo funcionamiento de tus equipos.",
    },
    {
      title: "Calidad de energía",
      subtitle: "",
      img: "/Calidad-energia_2-2048x1365.webp",
      text: "Mejoramos la eficiencia y protección de tus sistemas con tecnologías avanzadas como bancos de condensadores, filtros activos y estabilizadores de voltaje, asegurando una energía limpia y estable.",
    },
    {
      title: "Clima de precisión",
      subtitle: "",
      img: "/Clima-precision_1-2048x1365.webp",
      text: "Especialistas en climatización de precisión, proporcionamos soluciones como chillers y equipos perimetrales para mantener condiciones ambientales óptimas, esenciales en entornos críticos y de alta tecnología.",
    },
    {
      title: "Accionamiento eléctrico",
      subtitle: "",
      img: "/Accionamiento_3-2048x1365.webp",
      text: "Ofrecemos soluciones avanzadas en accionamiento eléctrico, incluyendo variadores de frecuencia, para optimizar el rendimiento y la eficiencia de tus sistemas industriales, garantizando un control preciso y una operación energéticamente eficiente.",
    },
  ];

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
      <CardParallax cards={myCards} />
      <StatsSection />
      <MultipleSwiper
        items={partners}
        folder={"/logosPartners"}
        title={"Nuestros partners"}
      />
      <MultipleSwiper
        items={partners2}
        folder={"/logosPartners"}
        reverse={true}
      />
      <MultipleSwiper items={partners3} folder={"/logosPartners"} />
      <MultipleSwiper
        items={partners4}
        folder={"/logosPartners"}
        reverse={true}
      />

      <FooterComponent />
    </>
  );
};

export default Nosotros;
