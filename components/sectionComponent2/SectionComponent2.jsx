import React from "react";
import styles from "./SectionComponent2.module.css";
import PhotoSection from "../photoSection/PhotoSection";
import TextSection from "../textSection/TextSection";

const SectionComponent2 = () => {
  return (
    <div className={styles.container}>
      <PhotoSection />
      <TextSection />
    </div>
  );
};

export default SectionComponent2;
