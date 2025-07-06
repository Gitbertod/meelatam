import React from "react";
import styles from "./TextSectionDual.module.css";

const TextSectionDual = () => {
  return (
    <section>
      <h2 className={styles.title}>Centiel Group SA</h2>
      <div className={styles.container}>
        <p className={styles.parrafo}>
          CENTIEL es una compañía suiza de innovación tecnológica con un equipo
          muy experimentado de diseñadores, quienes desarrollaron los 3 primeros
          SAIS de fase modular tolerantes a las fallas. Con nuestra pasión y
          compromiso hacia el diseño innovador, la calidad de los productos y la
          atención al cliente, nosotros nos estamos manteniendo a la par con los
          desafíos cada vez mayores en los centros de datos y otras aplicaciones
          críticas específicas. Nuestra ventaja competitiva se basa en ser
          comprensivo y tener un estilo de administración directo, al igual que
          una estructura organizacional lean y tomas de decisiones rápidas.
        </p>

        <p className={styles.parrafo}>
          Nosotros somos capaces de transformar rápidamente nuevas ideas en los
          productos y las soluciones más avanzadas al fomentar una base de
          respeto mutuo y sentimiento de solidaridad entre nuestra fuerza
          laboral y nuestra administración. Nosotros empleamos un gran valor en
          el desarrollo profesional de nuestra fuerza laboral, apoyando el
          entrenamiento interno y externo, al igual que el entrenamiento en el
          trabajo, el cual es un instrumento crítico de nuestro programa de
          desarrollo de personal.
        </p>
      </div>
    </section>
  );
};

export default TextSectionDual;
