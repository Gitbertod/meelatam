// Container.jsx
import React, { useRef } from "react";
import styles from "./Container.module.css";
import Hero from "../hero/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Container = () => {
  const bgContainerRef = useRef();
  const heroRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Paso 1: Animar el fondo
    tl.fromTo(
      bgContainerRef.current,
      { opacity: 0, scale: 1.02 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Paso 2: Animar el contenido del Hero
    tl.add(heroRef.current.animateHero(), "-=0.5"); // Se superpone levemente para fluidez
  }, []);

  return (
    <div ref={bgContainerRef} className={styles.container}>
      <Hero ref={heroRef} />
      
    </div>
  );
};

export default Container;
