import React from "react";
import styles from "./CardPrallax.module.css";

const cards = [
  {
    title: "Respaldo de energía",
    subtitle: "Lorem ipsum",
    img: "/Respaldo-de-energia_2-2048x1365.webp",
    text: "Soluciones integrales para una operación continua, incluyendo UPS, baterías, y generadores. Garantizamos seguridad y eficiencia energética en momentos críticos.",
  },
  {
    title: "Servicios",
    subtitle: "Lorem ipsum",
    img: "/Servicios_1-2048x1365.webp",
    text: "Ofrecemos un espectro completo de servicios, desde mantenimiento preventivo y correctivo hasta soluciones de emergencia y outsourcing, garantizando el óptimo funcionamiento de tus equipos.",
  },
  {
    title: "Calidad de energía",
    subtitle: "Lorem ipsum",
    img: "/Calidad-energia_2-2048x1365.webp",
    text: "Mejoramos la eficiencia y protección de tus sistemas con tecnologías avanzadas como bancos de condensadores, filtros activos y estabilizadores de voltaje, asegurando una energía limpia y estable.",
  },
  {
    title: "Clima de precisión",
    subtitle: "Lorem ipsum",
    img: "/Clima-precision_1-2048x1365.webp",
    text: "Especialistas en climatización de precisión, proporcionamos soluciones como chillers y equipos perimetrales para mantener condiciones ambientales óptimas, esenciales en entornos críticos y de alta tecnología.",
  },
  {
    title: "Accionamiento eléctrico",
    subtitle: "Lorem ipsum",
    img: "/Accionamiento_3-2048x1365.webp",
    text: "Ofrecemos soluciones avanzadas en accionamiento eléctrico, incluyendo variadores de frecuencia, para optimizar el rendimiento y la eficiencia de tus sistemas industriales, garantizando un control preciso y una operación energéticamente eficiente.",
  },
];

const CardParallax = () => {
  // Para el efecto touch en móviles, manejamos el hover con estado
  const [hovered, setHovered] = React.useState(Array(cards.length).fill(false));

  const handleTouch = (idx) => {
    setHovered((prev) =>
      prev.map((h, i) => (i === idx ? !h : h))
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>El Respaldo de MEE es productividad</h1>
      <div className={styles.cols}>
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`${styles.col} ${hovered[idx] ? styles.hover : ""}`}
            onTouchStart={() => handleTouch(idx)}
          >
            <div className={styles.container}>
              <div
                className={styles.front}
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className={styles.inner}>
                  <p>{card.title}</p>
                  <span>{card.subtitle}</span>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.inner}>
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardParallax;
