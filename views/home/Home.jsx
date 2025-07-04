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
import { clientes, clientes2,clientes3,clientes4 } from "../../components/multipleSwiper/logos";



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
        <LogoSVG/>
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
        <PhotoSection
          title={"HIREF XSW"}
          image={"./TSE_3.png"}
          subtitle={
            "XSW es la gama de enfriadoras condensadas por agua con compresores scroll de HiRef."
          }
        />
        <TextSection
          title={"Título aqui"}
          text={
            "XSW es la gama de enfriadoras condensadas por agua con compresores scroll de HiRef."
          }
        />
      </SectionComponent2>
      <SectionComponent2>
        <TextSection
          title={"Título aqui"}
          text={
            "TVX es el nuevo estándar de enfriadoras condensadas por aire diseñadas para los procesos de eficiencia energética y, al mismo tiempo, respetuosas del medio ambiente"
          }
        />
        <PhotoSection
          title={"HIREF TVX"}
          image={"./TVA_1.png"}
          subtitle={
            "Enfriadoras de líquido condensadas por aire con compresores de tornillo modulantes"
          }
        />
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
      {/* <BubbleGrid items={icons}></BubbleGrid> */}
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Home;
