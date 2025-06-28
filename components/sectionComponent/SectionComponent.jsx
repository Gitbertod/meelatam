import React, { useRef } from "react";
import styles from "./SectionComponent.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionComponent = () => {
  const boxRef = useRef();
  const textRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Escritorio
        isDesktop: "(min-width: 901px)",
        // Móvil/tablet
        isMobile: "(max-width: 900px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Animación de la caja solo en escritorio
        if (isDesktop && boxRef.current) {
          gsap.fromTo(
            boxRef.current,
            { x: -1000, opacity: 0, rotate: 0, scale: 5 },
            {
              x: 200,
              opacity: 1,
              rotate: 405,
              scale: 9,
              duration: 6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: boxRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            }
          );
        }

        // Animación de texto en todos los dispositivos (ajusta valores para mobile)
        const split = new SplitText(textRef.current, {
          type: "lines,words",
        });

        gsap.from(split.words, {
          opacity: 0,
          y: isMobile ? 15 : 30,
          duration: isMobile ? 0.7 : 1,
          stagger: isMobile ? 0.03 : 0.05,
          ease: "sine.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.textBox}>
        <div>
          <h3 className={styles.gradientText}>25 años de experiencia</h3>
        </div>
        <div ref={textRef} className={styles.text}>
          Desde 1998, hemos enfocado nuestros esfuerzos en gestionar proyectos,
          proveer soluciones y servicios de mantenimiento de equipamiento crítico
          en las áreas de respaldo de energía, calidad de energía, accionamiento
          eléctrico y climatización de precisión e industrial para Chile, Perú y
          Brasil.
        </div>
        <button className={styles.btn}>Más información</button>
      </div>
      <div ref={boxRef} className={styles.box}></div>
    </div>
  );
};

export default SectionComponent;
