import React from "react";
import styles from "./CardBig.module.css";

const CardBig = ({ title, photo,description }) => {
  return (
    <div className={styles.card}>
      <img src={photo}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CardBig;
