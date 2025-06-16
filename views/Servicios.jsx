import React from "react";
import Accordion from "../components/accordion/Accordion";
import styles from "./Servicios.module.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import SectionComponent2 from "../components/sectionComponent2/SectionComponent2";
import TextSection from "../components/textSection/TextSection";
import PhotoSection from "../components/photoSection/PhotoSection";
import HeroSection from "../components/heroSection/HeroSection";


const Servicios = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection title={"SERVICIOS"}></HeroSection>
      <div className={styles.containerHero}></div>
      <SectionComponent2>
        <TextSection
          title={"Servicio de mantenimiento de equipos críticos"}
          text={
            <p>
              Hemos confeccionado un protocolo de mantenimiento que sigue la
              pauta de mantención del fabricante e incorpora actividades
              adicionales propias de la experiencia de más de 25 años de nuestra
              compañía, imprimiéndole el sello único de MEE. Nuestro equipo
              descentralizado, es capaz de acudir en tu ayuda desde las
              distintas localidades donde nos encontramos ubicados, contando con
              plena autonomía y tiempos de respuesta eficientes.
            </p>
          }
        />
        <PhotoSection title={"TVA 1"} image={"./TVA_1.png"} />
      </SectionComponent2>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>SERVICIOS DE ASISTENCIA TÉCNICA</h2>
        <div className={styles.grid}>
          <Accordion title="Mantenimiento Preventivo">
            Servicios orientados a mantener un nivel de funcionamiento óptimo de
            los equipos, programando las intervenciones de sus puntos críticos
            en el momento idóneo. Suele tener un carácter sistemático con el fin
            de anticiparnos e intervenir para prevenir inconvenientes futuros.
          </Accordion>
          <Accordion title="Mantenimiento Correctivo">
            MEE planifica el conjunto de tareas destinadas a corregir los
            defectos que se han presentado en el equipamiento, con el fin de
            restituir la continuidad energética y climatización de nuestros
            clientes en el más breve plazo.
          </Accordion>
          <Accordion title="Diagnóstico de Emergencia">
            Servicio de urgencia que busca obtener un rápido diagnóstico de la
            situación anómala del equipamiento, definiendo posibles soluciones
            para restablecer la operación y facilitar al cliente antecedentes
            estratégicos para la toma de decisiones informadas.
          </Accordion>
          <Accordion title="Reparación de Emergencia">
            Servicio de urgencia que busca obtener un rápido diagnóstico de la
            situación Servicio que persigue restablecer la operación de un
            sistema crítico en situación de falla, acudiendo al sitio y
            realizando la reparación in situ o el recambio de equipo necesario
            para solucionar la emergencia.
          </Accordion>
          <Accordion title="Monitoreo Remoto">
            Servicio de urgencia que busca obtener un rápido diagnóstico de la
            situación Servicio de monitoreo remoto de UPS, rectificadores,
            baterías y cualquier equipo que posea la comunicación con nuestro
            sistema, en tiempo real, contando con las alarmas automáticas del
            sistema y la observación de nuestro equipo, otorgando un doble nivel
            de vigilancia. Ante un escenario de falla, nuestro equipo es capaz
            de reaccionar rápidamente, activándose los protocolos de atención de
            emergencia.
          </Accordion>
          <Accordion title="Outsourcing de Equipos">
            En MEE ofrecemos la modalidad de outsourcing de continuidad
            operativa, desarrollando una solución a tu medida y con la garantía
            de continuidad operacional. Nosotros nos encargamos de realizar los
            mantenimientos y asegurar tu continuidad energética.
          </Accordion>
          <Accordion title="Diagnóstico y Reparación de equipamiento de laboratorio">
            Contamos con un laboratorio en cada uno de nuestros centros de
            operación dedicado a diagnosticar equipos y repararlos.
          </Accordion>
          <Accordion title="Arriendo de Instrumentos">
            Servicios de arriendo de instrumentos de medición de variables
            eléctricas y químicas, entre los que tenemos: Analizador
            Electroquímico de Baterías, Analizador de Energía, Cámaras
            Termográficas y Medidores de aislación de 1, 5 y 10KV, entre otros.
          </Accordion>
          <Accordion title="Consultoría de Mantención de Sistemas Críticos">
            Servicio especializado cuyo fin es la elaboración de planes de
            mantenimiento predictivo, planes de mantención de instalaciones
            críticas, diagnóstico, procedimientos y manuales de operación
            confeccionados a la medida del cliente.
          </Accordion>
          <Accordion title="Servicios de Instalación y Montaje">
            El servicio de Puesta en Marcha de MEE garantiza la verificación de
            instalación como la veracidad de parámetros, la integración de
            máquinas y componentes del sistema, prueba de servicio y recepción
            final, así como el entrenamiento del personal de campo. Nos
            aseguramos que el sistema funcione en terreno y que tu equipo sepa
            operarlo correctamente.
          </Accordion>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Servicios;
