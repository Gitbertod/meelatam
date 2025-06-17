import React from "react";
import styles from "./NavBar.module.css";
import SubCategoryItem from "./SubCategoryItem";
import { Link } from "react-router-dom";

const SubCategoryList = ({
  subcategories,
  hoveredMenu2,
  hoveredMenu3,
  handleMouseEnter2,
  handleMouseEnter3,
  handleMouseLeave2,
  handleMouseLeave3,
  className,
  categoryId,
}) => {
  return (
    <ul className={styles[className]}>
      {subcategories.map((sub, i) => (
        <li key={sub.key || i} className={styles.category2}>
          <Link to={`/productos/${categoryId}/${sub.url}`}>
            <SubCategoryItem
              sub={sub}
              hoveredMenu2={hoveredMenu2}
              hoveredMenu3={hoveredMenu3}
              handleMouseEnter2={handleMouseEnter2}
              handleMouseLeave2={handleMouseLeave2}
              handleMouseEnter3={handleMouseEnter3}
              handleMouseLeave3={handleMouseLeave3}
              categoryId={categoryId}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryList;
