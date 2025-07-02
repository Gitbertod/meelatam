// components/BubbleGrid.jsx
import { useEffect, useRef } from "react";
import styles from "./BubbleGrid.module.css";
import gsap from "gsap";

export default function BubbleGrid({ items }) {
  const bubblesRef = useRef([]);

  useEffect(() => {
    // Animación inicial de entrada
    gsap.from(bubblesRef.current, {
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      ease: "elastic.out(1, 0.5)",
      duration: 1,
    });

    // Guardar referencias a los handlers para poder removerlos
    const handlers = bubblesRef.current.map((el) => {
      if (!el) return {};
      const onEnter = () => {
        gsap.to(el, {
          scale: 1.2,
          ease: "elastic.out(1, 0.4)",
          duration: 0.5,
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 0.4,
        });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return { el, onEnter, onLeave };
    });

    // Limpieza segura
    return () => {
      handlers.forEach(({ el, onEnter, onLeave }) => {
        if (el && onEnter && onLeave) {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        }
      });
    };
  }, [items]);

  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.bubble}
          ref={(el) => (bubblesRef.current[index] = el)}
        >
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
