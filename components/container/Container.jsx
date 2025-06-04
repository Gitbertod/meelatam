import React from "react";
import styles from "./Container.module.css";
import Hero from "../hero/Hero";
import SectionComponent from "../sectionComponent/SectionComponent";


const Container = () => {
  return (
    <div className={styles.container}>
      <Hero />
      
      <SectionComponent></SectionComponent>
    </div>
  );
};

export default Container;
