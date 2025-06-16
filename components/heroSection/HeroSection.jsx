import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ title, backgroundImage, height = "80vh" }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url("./cable.jpg"`, height }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
