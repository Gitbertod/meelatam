import React from "react";
import styles from "./TextSectionDual.module.css";

const TextSectionDual = ({ tittle, parrafo1, parrafo2, foto, subtitulo }) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.photoFrame}>
          {foto ? <img src={foto} alt="" className={styles.image} /> : ""}
        </div>
        <div>
          <h2 className={styles.title}>{tittle}</h2>
          <h3 className={styles.subtitulo}>{subtitulo}</h3>
          <p className={styles.parrafo}>{parrafo1}</p>
          {parrafo2 && <p className={styles.parrafo}>{parrafo2}</p>}
        </div>
      </div>
    </section>
  );
};

export default TextSectionDual;
