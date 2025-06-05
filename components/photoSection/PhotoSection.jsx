import React from "react";
import styles from "./PhotoSection.module.css";

const PhotoSection = () => {
  return (
    <div className={`${styles.photo} `}>
      <h2 className={styles.title}>TSE</h2>
      <h3>Bombas de calor, Enfriadoras de líquido</h3>
      <button className={styles.btn}>Más información</button>
      <img src="./TSE_3.png" />
    </div>
  );
};

export default PhotoSection;
