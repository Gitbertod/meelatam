import React from "react";
import styles from "./TextSection.module.css";

const TextSection = ({title}) => {
  return (
    <div className={styles.content}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>
          Soluciones de climatización para entornos tecnológicos, industriales y
          del terciario que van más allá del concepto de estándar.
        </p>
        <button className={styles.btn}>Saber más</button>
      </div>
    </div>
  );
};

export default TextSection;
