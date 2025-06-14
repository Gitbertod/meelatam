import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";
import NestedItemList from "./NestedItemList";

const SubCategoryItem = ({
  sub,
  hoveredMenu2,
  hoveredMenu3,
  handleMouseEnter2,
  handleMouseLeave2,
  handleMouseEnter3,
  handleMouseLeave3,
  categoryId
}) => {
  const hasNestedItems =
    sub.key &&
    hoveredMenu2 === sub.key &&
    (Array.isArray(sub.subSubCategory) ? sub.subSubCategory.length > 0 : Array.isArray(sub.items) && sub.items.length > 0);

  return (
    <li
      onMouseEnter={sub.key ? handleMouseEnter2(sub.key) : undefined}
      onMouseLeave={sub.key ? handleMouseLeave2 : undefined}
      className={styles.category2}
    >
      {sub.label} <HiChevronRight />
      {hasNestedItems && (
        <NestedItemList
          hoveredMenu3={hoveredMenu3}
          handleMouseEnter3={handleMouseEnter3}
          handleMouseLeave3={handleMouseLeave3}
          items={sub.subSubCategory || sub.items}
          subCategoryId={sub.key}
          categoryId={categoryId}
        />
      )}
    </li>
  );
};

export default SubCategoryItem;
