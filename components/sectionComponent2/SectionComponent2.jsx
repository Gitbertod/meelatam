import React from "react";
import styles from "./SectionComponent2.module.css";
import PhotoSection from "../photoSection/PhotoSection";
import TextSection from "../textSection/TextSection";

const SectionComponent2 = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default SectionComponent2;
