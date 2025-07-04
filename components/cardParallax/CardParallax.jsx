import React from "react";
import styles from "./CardPrallax.module.css";

const CardParallax = ({
  cards = [],
  title = "El Respaldo de MEE es productividad",
}) => {
  const [hovered, setHovered] = React.useState(Array(cards.length).fill(false));

  React.useEffect(() => {
    setHovered(Array(cards.length).fill(false));
  }, [cards.length]);

  const handleTouch = (idx) => {
    setHovered((prev) =>
      prev.map((h, i) => (i === idx ? !h : h))
    );
  };



  return (
    
    
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.cols}>
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`${styles.col} ${hovered[idx] ? styles.hover : ""}`}
            onTouchStart={() => handleTouch(idx)}
          >
            <div className={styles.container}>
              <div
                className={styles.front}
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className={styles.inner}>
                  <p>{card.title}</p>
                  <span>{card.subtitle}</span>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.inner}>
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardParallax;
