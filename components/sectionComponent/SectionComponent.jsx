import React, { useRef, useEffect } from "react";
import styles from "./SectionComponent.module.css";
import gsap from "gsap";

const SectionComponent = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 100,
      duration: 1,
      opacity:1
    });
  }, []);

  return (
    <div ref={boxRef} className={styles.container}>
      SECTION
    </div>
  );
};

export default SectionComponent;
