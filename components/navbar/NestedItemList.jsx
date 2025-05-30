import React from "react";
import styles from "./NavBar.module.css";

const NestedItemList = ({ items }) => {
  return (
    <ul className={styles.slideRight5}>
      {items.map((item, j) => (
        <li key={j} className={styles.category2}>
          {item} ITEM
        </li>
      ))}
    </ul>
  );
};

export default NestedItemList;
