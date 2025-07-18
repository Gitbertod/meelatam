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
import FooterComponent from "../../components/footer/FooterComponent";
import MultipleSwiper from "../../components/multipleSwiper/MultipleSwiper";
import PhotoSection2 from "../../components/photoSection2/PhotoSection2";
import {
  clientes,
  clientes2,
  clientes3,
  clientes4,
} from "../../components/multipleSwiper/logos";

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

  const icons = [
    { image: "/casodeExito1.jpg", alt: "Mail" },
    { image: "/casodeExito2.jpg", alt: "Music" },
    { image: "/casodeExito3.jpg", alt: "Calendar" },
    { image: "/casodeExito4.jpg", alt: "Maps" },
    { image: "/casodeExito5.jpg", alt: "Photos" },
  ];

  return (
    <>
      <NavBar />
      <Container />
      <SectionComponent />

      <SectionComponent2>
        <PhotoSection2 image={"./CentielStratusP.jpg"}></PhotoSection2>

        <TextSection
          title={"StratusPower"}
          text={
            "Nueva línea de UPS modular de Centiel de hasta 97,6% de eficiencia, sistema diseñado para un tiempo de vida útil de 30 años. Capacidad de sobre carga continúa de 124% de su capacidad nominal y con un rango de potencia en un mismo gabinete desde 10kW hasta 900kW, BUS DC Flexible entre 17-50 baterías con capacidad para trabajar con una amplia variedad de baterías (VRLA, NiCd, Litio, Sodio, etc) y con opciones de manejar de forma interna hasta 320 baterías VRLA."
          }
          linkBtn="/productos/respaldo-de-energia/ups/ups-trifasicas/centiel-stratus-power-10kva-375mva-modular"
        />
      </SectionComponent2>
      <SectionComponent2>
        <TextSection
          title={"PremiumTower S2"}
          text={
            "Backfeed protection de forma standard, BUS DC Flexible entre 17-50 baterías con capacidad para trabajar con una amplia variedad de baterías (VRLA, NiCd, Litio, Sodio, etc) y con opciones de manejar de forma interna hasta 240 baterías VRLA. Nueva línea de UPS standalone de Centiel de hasta 97,1% de eficiencia, con componentes diseñados para reemplazo por mantenimiento no menor a 15 años."
          }
          linkBtn="/productos/respaldo-de-energia/ups/ups-trifasicas/centiel-premium-tower-s2-10kva-500kva-torre"
        />
        {/* <PhotoSection
          title={"PremiumTower S2"}
          image={"./premiumTowerS2.png"}
          subtitle={
            "Backfeed protection de forma standard, BUS DC Flexible entre 17-50 baterías con capacidad para trabajar con una amplia variedad de baterías (VRLA, NiCd, Litio, Sodio, etc) y con opciones de manejar de forma interna hasta 240 baterías VRLA."
          }
        /> */}

        <PhotoSection2 image={"./centielPremiumT.jpg"}/>
      </SectionComponent2>
      <MultipleSwiper
        title="Clientes que han confiado en nosotros"
        items={clientes}
        folder={"/logosClientes"}
        reverse={true}
      />
      <MultipleSwiper
        items={clientes2}
        folder={"/logosClientes"}
        reverse={false}
      />
      <MultipleSwiper
        items={clientes3}
        folder={"/logosClientes"}
        reverse={true}
      />
      <MultipleSwiper
        items={clientes4}
        folder={"/logosClientes"}
        reverse={false}
      />
      <StatsSection></StatsSection>

      <NewsCarousel></NewsCarousel>

      <FooterComponent></FooterComponent>
    </>
  );
};

export default Home;
