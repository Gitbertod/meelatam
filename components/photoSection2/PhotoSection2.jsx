import React from "react";
import styles from "./PhotoSection2.module.css";

const PhotoSection2 = ({image}) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image}></img>
    </div>
  );
};

export default PhotoSection2;
