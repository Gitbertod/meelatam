import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";
import NestedItemList from "./NestedItemList";

const SubCategoryItem = ({ sub, hoveredMenu2, handleMouseEnter2, handleMouseLeave2 }) => {
  const hasNestedItems = sub.key && hoveredMenu2 === sub.key && sub.items;

  return (
    <li
      onMouseEnter={sub.key ? handleMouseEnter2(sub.key) : undefined}
      onMouseLeave={sub.key ? handleMouseLeave2 : undefined}
      className={styles.category2}
    >
      {sub.label} <HiChevronRight />
      {hasNestedItems && <NestedItemList items={sub.items} />}
    </li>
  );
};

export default SubCategoryItem;
