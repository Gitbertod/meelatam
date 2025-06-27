import React, { useEffect, useRef, useState } from "react";
import styles from "./NewsCarousel.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const news = [
  {
    title: "Lanzamiento de nuevo producto",
    description: "Descubre las características del nuevo inversor solar.",
    link: "#",
  },
  {
    title: "Centiel en ExpoSolar",
    description: "Nuestra participación en la feria internacional de energía.",
    link: "#",
  },
  {
    title: "Nueva alianza estratégica",
    description: "Unimos fuerzas con una empresa líder del sector.",
    link: "#",
  },
  {
    title: "Certificación internacional",
    description: "Hemos obtenido la certificación ISO 9001.",
    link: "#",
  },
];

const NewsCarousel = () => {

  return (
    <section className={styles.carousel}>
      <h2 className={styles.heading}>Últimas Noticias</h2>
      <div className={styles.wrapper}>
        {news.map((item, idx) => (
          <div key={idx} className={`${styles.card} newsCard`}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} className={styles.button}>
              Leer más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCarousel;
