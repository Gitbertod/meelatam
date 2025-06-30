import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ title, backgroundImage, height = "80vh", parafo }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add(styles.heroFadeIn);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      style={{ backgroundImage: `url("./${backgroundImage}")`, height }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.parrafo}>{parafo}</p>
      </div>
    </section>
  );
};

export default HeroSection;
