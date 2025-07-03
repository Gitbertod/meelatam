import React, { useEffect, useRef } from "react";
import styles from "./AboutText.module.css";

const AboutText = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(styles.fadeInUp);
    }
  }, []);

  return (
    <div ref={ref} className={styles.containerText}>
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
      <br />
      <p>
        En MEE, somos especialistas en energía y clima de precisión,
        nuestros sistemas respaldan las operaciones más importantes del
        país, trabajamos con la finalidad de que nuestro clientes siempre se
        mantengan en operación, además contamos con la certificación ISO
        9001 en el 100% de nuestros procesos.
      </p>
    </div>
  );
};

export default AboutText;