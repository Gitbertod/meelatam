import React, { useRef } from "react";
import styles from "./StatsSection.module.css";
import { ImPowerCord, ImUserCheck, ImPower, ImUsers } from "react-icons/im";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const container = useRef();
  const statRefs = useRef([]);

  const stats = [
    { icon: ImPowerCord, label: "22 Filiales" },
    { icon: ImUserCheck, label: "2000+ Empleados" },
    { icon: ImUsers, label: "2000+ Empleados" },
    { icon: ImPower, label: "15 Años de experiencia" },
  ];

  useGSAP(() => {
    gsap.from(statRefs.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, { scope: container });

  return (
    <section ref={container} className={styles.statsSection}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={styles.stat}
            ref={el => (statRefs.current[index] = el)}
          >
            <span className={styles.icon}>
              <Icon />
            </span>
            <p>{stat.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export default StatsSection;
