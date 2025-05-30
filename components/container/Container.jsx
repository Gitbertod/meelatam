import React from "react";
import styles from "./Container.module.css";
import Hero from "../hero/Hero";

const Container = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Container;
