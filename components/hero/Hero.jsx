// Hero.jsx
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = forwardRef((props, ref) => {
  const h2Ref = useRef();
  const h3Ref = useRef();

  useImperativeHandle(ref, () => ({
    animateHero: () => {
      const split = SplitText.create([h2Ref.current, h3Ref.current], {
        type: "words",
        aria: "hidden",
      });

      const tl = gsap.timeline();

      tl.from(split.words, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.05,
        ease: "sine.out",
      });

      return tl;
    },
  }));

  return (
    <div className={styles.heroContainer}>
      <img className={styles.heroImage} src="/trifasica-4.png" />
      <div className={styles.containerText}>
        <h2 ref={h2Ref} className={`${styles.title} animeMe`}>
          Somos expertos en respaldo de energía
        </h2>
        <h3 ref={h3Ref} className={`${styles.text} animeMe`}>
          Contamos con la categoría de respaldo energético más variada y amplia del mercado.
        </h3>
        <button className={styles.btn}>Más información</button>
      </div>
    </div>
  );
});

export default Hero;
