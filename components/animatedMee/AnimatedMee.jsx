import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedMee.module.css";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, useGSAP);

const AnimatedMee = () => {
  const container = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");

      // Estado inicial más dinámico
      gsap.set(boxes[0], {
        x: 120,
        rotation: 360,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center",
      });
      gsap.set(boxes[1], {
        x: -120,
        rotation: -360,
        opacity: 0,
        scale: 0.5,
        transformOrigin: "center center",
      });
      gsap.set(boxes[2], { x: 250, opacity: 0, scale: 0.5 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        })
        .to(boxes[0], {
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          boxes[1],
          {
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "<0.2"
        ) // empieza ligeramente antes de que termine la anterior
        .to(
          boxes[2],
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "<0.2"
        );
    },
    { scope: container }
  );

  return (
    <div>
      <section className={styles.boxesContainer} ref={container}>
        <div className="box">
          <img src="/mLogo.svg" alt="Logo" className={styles.image} />
        </div>
        <div className="box">
          <img src="/eLogo.svg" alt="Logo" className={styles.image} />
        </div>
        <div className="box">
          <img src="/eLogo.svg" alt="Logo" className={styles.image} />
        </div>
      </section>
      <p className={styles.tagline}>Entregamos Continuidad Energética</p>
    </div>
  );
};

export default AnimatedMee;
