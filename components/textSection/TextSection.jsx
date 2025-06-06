import React, { useEffect, useRef } from "react";
import styles from "./TextSection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextSection = ({ title }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(titleRef.current, { type: "chars" });
      const chars = split.chars;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animación del título letra por letra
      tl.from(chars, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.03,
      });

      // Animación del texto y el botón
      tl.from(
        [textRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 1.3,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={styles.content}>
      <div className={styles.textContainer}>
        <h2 ref={titleRef} className={styles.title}>{title}</h2>
        <p ref={textRef} className={styles.text}>
          Soluciones de climatización para entornos tecnológicos, industriales y
          del terciario que van más allá del concepto de estándar.
        </p>
        <button  className={styles.btn}>Saber más</button>
      </div>
    </div>
  );
};

export default TextSection;
