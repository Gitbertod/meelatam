import React from "react";
import styles from "./SectionComponent2.module.css";

const SectionComponent2 = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.photo} `}>
        <h2 className={styles.title}>TSE</h2>
        <h3>Bombas de calor, Enfriadoras de líquido</h3>
        <button className={styles.btn}>Más información</button>
        <img src="./TSE_3.png" />
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>TITLE2</h2>
          <p className={styles.text}>
            Soluciones de climatización para entornos tecnológicos, industriales y del terciario que van más allá del concepto de estándar.
          </p>
          <button className={styles.btn}>Saber más</button>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent2;
