import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ title, backgroundImage, height = "80vh", parafo }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add(styles.heroFadeIn);
    }
  }, []);

  // Efecto parallax: actualiza el backgroundPosition al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.backgroundPosition = `center ${scrolled * 0.4}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      style={{ backgroundImage: `url("./${backgroundImage}")`, height, backgroundPosition: "center 0px" }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.parrafo}>{parafo}</p>
      </div>
        {/* <div class={styles.trianguloRectangulo}></div> */}
    </section>
  );
};

export default HeroSection;
