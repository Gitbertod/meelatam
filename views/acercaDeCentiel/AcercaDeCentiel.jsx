import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ParallaxHero from "../../components/parallaxHero/ParallaxHero";
import SectionComponent2 from "../../components/sectionComponent2/SectionComponent2";
import PhotoSection from "../../components/photoSection/PhotoSection";
import TextSection from "../../components/textSection/TextSection";
import CardParallax from "../../components/cardParallax/CardParallax";
import TextSectionDual from "../../components/textSectionDual/TextSectionDual";
import FooterComponent from "../../components/footer/FooterComponent";
import styles from "./AcercaDeCentiel.module.css";
import SectionComponent from "../../components/sectionComponent/SectionComponent";

const AcercaDeCentiel = () => {
  const myCards = [
    {
      tittle: "Filippo Marbach",
      subtitle: "Fundador",
      img: "/AcercaDeCentiel/Centiel_Founder_3-1.jpg",
      text: "Filippo comenzó su carrera profesional en el equipo de Investigación y Desarrollo de Invertomatic en 1984. En 1993, él cofundó Newave SA, el fabricante de SAIS suizo, donde él desempeñó los cargos de director de tecnología y director de operaciones, al igual que como miembro de junta de la compañía. En 1996, Filippo y su equipo diseñaron el primer SAIS sin transformador de tres fases del mundo. En el 2000, esto fue seguido por el diseño del primer y verdadero SAIS modular de tres fases. Él subsecuentemente lideró el equipo que diseñó la tecnología SAIS modular de tres fases de segunda y de tercera generación del mercado. En 2007, Newave fue listado en la bolsa de valores suiza y Filippo continuó manteniendo el cargo de director de operaciones y miembro de la junta de directores. En febrero de 2012, Newave fue adquirido por ABB, y luego Filippo dejó la compañía una vez que fue satisfactoriamente integrada a ABB. En 2015, Filippo cofundó Centiel SA. En este cargo, él continuó innovando la tecnología SAIS diseñando el SAIS modular de tres fases de cuarta generación del mercado y una gama completamente nueva de SAIS sin transformadores de tres fases que lideró el mercado global en términos de disponibilidad y eficiencia operativa.",
    },
    {
      tittle: "Gerardo Lecuona",
      subtitle: "Cofundador, director de ventas, miembro de junta.",
      img: "/AcercaDeCentiel/Centiel_Founder_Gerardo_Lecuona.jpg",
      text: "Gerardo Lecuona estudió ingeniería electrónica en la Universidad de Guadalajara, México. Él tiene una licenciatura en diseño de sistemas integrados del Instituto de Aprendizaje Avanzado e Investigación en Suecia y una maestría en administración de empresas de Milan Polytechnic. En 2008, Gerardo se unió a Newave SA, el fabricante suizo de SAIS como un ingeniero de investigación y desarrollo, y comenzó a desarrollar suministros energéticos modulares sin interrupciones. Tomando a finales de 2010 el cargo de jefe de proyecto, Gerardo participó en el diseño de la tecnología SAIS modular de tres fases de tercera generación y una gran variedad de suministros de energía sin transformadores ininterrumpidos. En 2012 Gerardo fue el encargado de dirigir el departamento de Investigación y Desarrollo en Newave SA. En febrero de 2012, Newave fue adquirido por ABB, y en 2013 Gerardo fue asignado para liderar la división de tecnología como el director en tecnología para SAIS, y gestionó satisfactoriamente la integración con ABB. En 2015, Gerardo cofundó Centiel. En su papel como director de ventas globales, Gerardo está llevando al marcado la tecnología vanguardista de Centiel y está formando a Centiel como una de las marcas comerciales más innovadoras como fabricantes de SAIS.",
    },
    {
      tittle: "David Bond",
      subtitle:
        "Miembro de junta de Centiel SA y presidente de Centiel Ltd., la subsidiaria de Reino Unido de Centiel SA.",
      img: "/AcercaDeCentiel/Centiel_Founder_2-1.jpg",
      text: "David comenzó su carrera profesional en la industria de los SAIS en 1988, cuando se unió a Fiskars UK (ahora parte de Eaton) como director de servicios técnicos, responsable de todas las actividades post-venta, incluyendo el campo de servicio, gestión de proyecto y servicio de ventas. En 1996, él fue el director cofundador de Uninterruptible Power Supplies Ltd. (UPSL) y en 2005 él dirigió una compra de acciones para entonces volverse el director administrativo de la compañía. A finales de 2008, UPSL fue vendido a la compañía estadounidense, Kohler, y David pasó hasta mediados de 2010 ayudando a integrar UPSL con Kohler. Después de dejar UPSL, David se unió al fabricante de SAIS suizo, Newave, como su director general. En 2012, Newave fue adquirido por ABB y David participó en roles importantes en las etapas de procesamiento e integración de la adquisición. Después de dejar Newave/ABB, David tomó el cargo de director administrativo de Reino Unido para Emerson Network Power (ahora Vertiv) y como director administrativo de Reino Unido para Benning Power Electronics. Desde su jubilación del campo de la gerencia ejecutiva a finales de 2017, David se ha vuelto el director no ejecutivo de la subsidiaria de Reino Unido de Centiel SA, Centiel Ltd., y ha sido designado para la junta de Centiel SA.",
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      <ParallaxHero />
      <SectionComponent2 style={{ minHeight: "50vh" }}>
        <div className={styles.mainContainer}>
          <section>
            <TextSectionDual
              tittle={"Centiel Group SA"}
              parrafo1="CENTIEL es una compañía suiza de innovación tecnológica con un equipo
                  muy experimentado de diseñadores, quienes desarrollaron los 3 primeros
                  SAIS de fase modular tolerantes a las fallas. Con nuestra pasión y
                  compromiso hacia el diseño innovador, la calidad de los productos y la
                  atención al cliente, nosotros nos estamos manteniendo a la par con los
                  desafíos cada vez mayores en los centros de datos y otras aplicaciones
                  críticas específicas. Nuestra ventaja competitiva se basa en ser
                  comprensivo y tener un estilo de administración directo, al igual que
                  una estructura organizacional lean y tomas de decisiones rápidas."
              parrafo2="Nosotros somos capaces de transformar rápidamente nuevas ideas en los
          productos y las soluciones más avanzadas al fomentar una base de
          respeto mutuo y sentimiento de solidaridad entre nuestra fuerza
          laboral y nuestra administración. Nosotros empleamos un gran valor en
          el desarrollo profesional de nuestra fuerza laboral, apoyando el
          entrenamiento interno y externo, al igual que el entrenamiento en el
          trabajo, el cual es un instrumento crítico de nuestro programa de
          desarrollo de personal."
            />
          </section>
        </div>
      </SectionComponent2>
      <SectionComponent2>
        <TextSectionDual
          tittle="Filippo Marbach"
          subtitulo="Fundador, director general y presidente de junta"
          foto="/AcercaDeCentiel/Centiel_Founder_3-1.jpg"
          parrafo1="Filippo comenzó su carrera profesional en el equipo de Investigación y Desarrollo de Invertomatic en 1984. En 1993, él cofundó Newave SA, el fabricante de SAIS suizo, donde él desempeñó los cargos de director de tecnología y director de operaciones, al igual que como miembro de junta de la compañía. En 1996, Filippo y su equipo diseñaron el primer SAIS sin transformador de tres fases del mundo. En el 2000, esto fue seguido por el diseño del primer y verdadero SAIS modular de tres fases. Él subsecuentemente lideró el equipo que diseñó la tecnología SAIS modular de tres fases de segunda y de tercera generación del mercado. En 2007, Newave fue listado en la bolsa de valores suiza y Filippo continuó manteniendo el cargo de director de operaciones y miembro de la junta de directores. En febrero de 2012, Newave fue adquirido por ABB, y luego Filippo dejó la compañía una vez que fue satisfactoriamente integrada a ABB. En 2015, Filippo cofundó Centiel SA. En este cargo, él continuó innovando la tecnología SAIS diseñando el SAIS modular de tres fases de cuarta generación del mercado y una gama completamente nueva de SAIS sin transformadores de tres fases que lideró el mercado global en términos de disponibilidad y eficiencia operativa."
        />
      </SectionComponent2>
      <SectionComponent2>
        <TextSectionDual
          tittle="Gerardo Lecuona"
          subtitulo="Cofundador, director de ventas, miembro de junta."
          foto="/AcercaDeCentiel/Centiel_Founder_Gerardo_Lecuona.jpg"
          parrafo1="Gerardo Lecuona estudió ingeniería electrónica en la Universidad de Guadalajara, México. Él tiene una licenciatura en diseño de sistemas integrados del Instituto de Aprendizaje Avanzado e Investigación en Suecia y una maestría en administración de empresas de Milan Polytechnic. En 2008, Gerardo se unió a Newave SA, el fabricante suizo de SAIS como un ingeniero de investigación y desarrollo, y comenzó a desarrollar suministros energéticos modulares sin interrupciones. Tomando a finales de 2010 el cargo de jefe de proyecto, Gerardo participó en el diseño de la tecnología SAIS modular de tres fases de tercera generación y una gran variedad de suministros de energía sin transformadores ininterrumpidos. En 2012 Gerardo fue el encargado de dirigir el departamento de Investigación y Desarrollo en Newave SA. En febrero de 2012, Newave fue adquirido por ABB, y en 2013 Gerardo fue asignado para liderar la división de tecnología como el director en tecnología para SAIS, y gestionó satisfactoriamente la integración con ABB. En 2015, Gerardo cofundó Centiel. En su papel como director de ventas globales, Gerardo está llevando al marcado la tecnología vanguardista de Centiel y está formando a Centiel como una de las marcas comerciales más innovadoras como fabricantes de SAIS."
        />
      </SectionComponent2>
      <SectionComponent2>
        <TextSectionDual
          tittle="David Bond"
          subtitulo="Miembro de junta de Centiel SA y presidente de Centiel Ltd., la subsidiaria de Reino Unido de Centiel SA."
          foto="/AcercaDeCentiel/Centiel_Founder_2-1.jpg"
          parrafo1="David comenzó su carrera profesional en la industria de los SAIS en 1988, cuando se unió a Fiskars UK (ahora parte de Eaton) como director de servicios técnicos, responsable de todas las actividades post-venta, incluyendo el campo de servicio, gestión de proyecto y servicio de ventas. En 1996, él fue el director cofundador de Uninterruptible Power Supplies Ltd. (UPSL) y en 2005 él dirigió una compra de acciones para entonces volverse el director administrativo de la compañía. A finales de 2008, UPSL fue vendido a la compañía estadounidense, Kohler, y David pasó hasta mediados de 2010 ayudando a integrar UPSL con Kohler. Después de dejar UPSL, David se unió al fabricante de SAIS suizo, Newave, como su director general. En 2012, Newave fue adquirido por ABB y David participó en roles importantes en las etapas de procesamiento e integración de la adquisición. Después de dejar Newave/ABB, David tomó el cargo de director administrativo de Reino Unido para Emerson Network Power (ahora Vertiv) y como director administrativo de Reino Unido para Benning Power Electronics. Desde su jubilación del campo de la gerencia ejecutiva a finales de 2017, David se ha vuelto el director no ejecutivo de la subsidiaria de Reino Unido de Centiel SA, Centiel Ltd., y ha sido designado para la junta de Centiel SA."
        />
      </SectionComponent2>
      <SectionComponent2>
        <TextSectionDual
          tittle="Esteban Maquieira M. "
          subtitulo="Director Centiel Latinoamérica (Team Latam) "
          foto="/AcercaDeCentiel/esteban.jpg"
          parrafo1="Mas de 20 años de experiencia en el rubro UPS. Conocimiento de marcas como Newave - ABB y Centiel"
        >
          <section className={styles.section}>
          <button className={styles.button}>
            <a href="https://www.centiel.com/" target="blank">
              Ir a
              <img src="/centiel_logo.svg" />
            </a>
          </button>
        </section>
        </TextSectionDual>
        
      </SectionComponent2>

      <FooterComponent></FooterComponent>
    </>
  );
};

export default AcercaDeCentiel;
