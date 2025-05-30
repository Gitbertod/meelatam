import React from "react";
import styles from "./NavBar.module.css";
import SubCategoryItem from "./SubCategoryItem";

const SubCategoryList = ({
  subcategories,
  hoveredMenu2,
  handleMouseEnter2,
  handleMouseLeave2,
  className,
}) => {
  return (
    <ul className={styles[className]}>
      {subcategories.map((sub, i) => (
        <SubCategoryItem
          key={i}
          sub={sub}
          hoveredMenu2={hoveredMenu2}
          handleMouseEnter2={handleMouseEnter2}
          handleMouseLeave2={handleMouseLeave2}
        >esto es el item</SubCategoryItem>
      ))}
    </ul>
  );
};

export default SubCategoryList;

