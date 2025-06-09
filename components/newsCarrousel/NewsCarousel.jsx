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
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [index, setIndex] = useState(0);

  // Animación de entrada al hacer scroll
  useGSAP(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, { scope: containerRef });

  // Animación hover manual
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const onEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power3.out",
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  // Autoplay scroll horizontal
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Movimiento del scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: index * 320, // ajusta este valor según el ancho de tus cards
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section ref={containerRef} className={styles.carousel}>
      <h2 className={styles.heading}>Últimas Noticias</h2>
      <div className={styles.wrapper} ref={scrollRef}>
        {news.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`${styles.card} newsCard`}
          >
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
