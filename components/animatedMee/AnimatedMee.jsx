import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import styles from "./AnimatedMee.module.css";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(useGSAP);

const AnimatedMee = () => {
  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  );
  return (
    <>
      <section className={styles.boxesContainer} ref={container}>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box">
          <img  src="/mLogo.svg" alt="Logo" className={styles.image} />
        </div>
        <div className="box"><img  src="/eLogo.svg" alt="Logo" className={styles.image} /></div>
        <div className="box"><img  src="/eLogo.svg" alt="Logo" className={styles.image} /></div>
      </section>
    </>
  );
};

export default AnimatedMee;
