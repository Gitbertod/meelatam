import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      x: 100,
      duration: 1,
      opacity: 1,
    });
  }, []);


  return (
    <div className={styles.heroContainer}>
      <img className={styles.heroImage} src="/trifasica-4.png" />
      <div className={styles.containerText}>
        <h2 ref={textRef} className={styles.title}>
          Somos expertos en respaldo de energía
        </h2>
        <h3 className={styles.text}>
          Contamos con la categoría de respaldo energético más variada y amplia
          del mercado.
        </h3>
        <button className={styles.btn}>Mas informacíon</button>
      </div>
    </div>
  );
};

export default Hero;
