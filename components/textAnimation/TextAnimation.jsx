import React from "react";
import styles from "./TextAnimation.module.css"

const TextAnimation = () => {
  return (
    <>
      <div className={styles.body} >
        25 años de
        <div className={styles.flip}>
          <div>
            <div>Experiencia</div>
          </div>
          <div>
            <div>Respaldo</div>
          </div>
          <div>
            <div>Continuidad enérgetica</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextAnimation;
