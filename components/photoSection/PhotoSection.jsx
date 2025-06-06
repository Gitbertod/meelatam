import React, { useEffect, useRef } from "react";
import styles from "./PhotoSection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PhotoSection = ({ image, title }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const h3Ref = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text (letra por letra)
      const split = new SplitText(titleRef.current, { type: "chars" });
      const chars = split.chars;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // ← aquí
          once: false, // ← asegura que se repita
        },
      });

      // Animar el título letra por letra
      tl.from(chars, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
      });

      // Animar h3, botón e imagen con fade y escala
      tl.from(
        [h3Ref.current, buttonRef.current, imageRef.current],
        {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration:3.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.3" // se superpone ligeramente con el final del título
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className={styles.photo}>
      <h2 ref={titleRef} className={styles.title}>{title}</h2>
      <h3 ref={h3Ref}>Bombas de calor, Enfriadoras de líquido</h3>
      <button ref={buttonRef} className={styles.btn}>Más información</button>
      <img ref={imageRef} src={image} alt="Sección" />
    </div>
  );
};

export default PhotoSection;
