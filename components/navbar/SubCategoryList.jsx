// SubCategoryList.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";

const SubCategoryList = ({
  subcategories,
  hoveredMenu2,
  handleMouseEnter2,
  handleMouseLeave2,
  className
}) => {
  return (
    <ul className={styles[className]}>
      {subcategories.map((sub, i) => (
        <li
          key={i}
          onMouseEnter={sub.key ? handleMouseEnter2(sub.key) : undefined}
          onMouseLeave={sub.key ? handleMouseLeave2 : undefined}
          className={styles.category2}
        >
          {sub.label} <HiChevronRight />
          {sub.key && hoveredMenu2 === sub.key && sub.items && (
            <ul className={styles.slideRight5}>
              {sub.items.map((item, j) => (
                <li key={j} className={styles.category2}>
                  {item}
                </li>
              ))}
            </ul> 
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubCategoryList;
