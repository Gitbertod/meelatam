import React from "react";
import NavBar from "../../components/navbar/NavBar";
import HeroSection from "../../components/heroSection/HeroSection";
import SectionComponent2 from "../../components/sectionComponent2/SectionComponent2";
import TextSection from "../../components/textSection/TextSection";
import PhotoSection from "../../components/photoSection/PhotoSection";
import styles from "./Nosotros.module.css";
import StatsSection from "../../components/statsSection/StatsSection";
import FooterComponent from "../../components/footer/FooterComponent";

const Nosotros = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection
        title={"Nosotros"}
        parafo={"¡ENCONTRAR UNA SOLUCIÓN PERMANENTE ES NUESTRO OBJETIVO!"}
        backgroundImage={"/heroNews.jpg"}
      ></HeroSection>
      <div className="flex justify-center h-vh flex-col md:flex-row">
        <div className={styles.containerText}>
          <h2>
            Desde 1998, Nuestro Equipo Ha Logrado Comprender Las Necesidades De
            La Industria, Convirtiéndonos Así En Una Empresa Integradora Que
            Gestiona Más de 300 Proyectos Anualmente en el Cono Sur.
          </h2>
          <p>
            Contamos con 3750 m2 en infraestructura y 5 centros de operación
            localizados en Santiago, Antofagasta, Concepción, Lima y Curitiba.
            Cada uno de ellos dotado con servicio técnico, laboratorio, bodega y
            atención comercial descentralizada, brindando autonomía, stock
            local, ejecución de garantías localmente y una rápida reacción en
            cualquier localidad, permitiéndonos realizar el mantenimiento de
            equipamiento de misión crítica, tanto de nuestras marcas
            representadas como también de otras marcas.
          </p>
          <br></br>
          <p>
            En MEE, somos especialistas en energía y clima de precisión,
            nuestros sistemas respaldan las operaciones más importantes del
            país, trabajamos con la finalidad de que nuestro clientes siempre se
            mantengan en operación, además contamos con la certificación ISO
            9001 en el 100% de nuestros procesos.
          </p>
        </div>
        <img src="/person.jpg" alt="" className={styles.shape} />
      </div>
      <StatsSection></StatsSection>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Nosotros;
