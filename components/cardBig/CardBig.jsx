import React from "react";
import styles from "./CardBig.module.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const CardBig = ({ title, foto, description, link}) => {
  return (
    <div className={styles.card}>
      <img src={foto} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank">
        <ButtonComponent text={"Leer más"}></ButtonComponent>
      </a>
    </div>
  );
};

export default CardBig;
