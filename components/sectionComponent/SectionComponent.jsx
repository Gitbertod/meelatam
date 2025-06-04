import React, { useRef, useLayoutEffect } from "react";
import styles from "./SectionComponent.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SectionComponent = () => {
  const boxRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    // Box animation
    gsap.fromTo(
      boxRef.current,
      {
        x: -1000,
        duration: 0,
        opacity: 0,
        rotate: 0,
        scale: 10,
      },
      {
        x: 400,
        duration: 3,
        opacity: 1,
        rotate: 405,
        scale: 11,
        ease: "power3.out",
      }
    );

    // Text animation with SplitText
    const split = new SplitText(textRef.current, {
      type: "lines,words",
    });

    gsap.from(split.words, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.05,
        ease: "sine.out",
      });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={textRef} className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at facere
        distinctio laborum reprehenderit sunt nostrum temporibus vitae?
        Voluptatum aliquid et eum nam pariatur recusandae ducimus amet dolorem
        blanditiis atque?
      </div>
      <div ref={boxRef} className={styles.box}></div>
    </div>
  );
};

export default SectionComponent;
