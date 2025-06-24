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
    // Animación de la caja solo en escritorio
    if (window.innerWidth > 900) {
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

    // Animación de texto en todos los dispositivos
    const split = new SplitText(textRef.current, {
      type: "lines,words",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.05,
      ease: "sine.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.textBox}>
        <div>
          <h3 className={styles.gradientText}>25 años de experiencia</h3>
        </div>
        <div ref={textRef} className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at
          facere distinctio laborum reprehenderit sunt nostrum temporibus vitae?
          Voluptatum aliquid et eum nam pariatur recusandae ducimus amet dolorem
          blanditiis atque?
        </div>
        <button className={styles.btn}>Más información</button>
      </div>
      <div ref={boxRef} className={styles.box}></div>
    </div>
  );
};

export default SectionComponent;
