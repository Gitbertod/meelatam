import React from "react";
import styles from "./NavBar.module.css";
import SubCategoryItem from "./SubCategoryItem";

const SubCategoryList = ({
  subcategories,
  hoveredMenu2,
  hoveredMenu3,
  handleMouseEnter2,
  handleMouseEnter3,
  handleMouseLeave2,
  handleMouseLeave3,
  className,
}) => {
  return (
    <ul className={styles[className]}>
      {subcategories.map((sub, i) => (
        <SubCategoryItem
          key={i}
          sub={sub}
          hoveredMenu2={hoveredMenu2}
          hoveredMenu3={hoveredMenu3}
          handleMouseEnter2={handleMouseEnter2}
          handleMouseLeave2={handleMouseLeave2}
           handleMouseEnter3={handleMouseEnter3}
          handleMouseLeave3={handleMouseLeave3}

        />
      ))}
    </ul>
  );
};

export default SubCategoryList;

