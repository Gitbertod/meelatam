// MenuCategory.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";
import { iconMap } from "./MenuIcons";
import SubCategoryList from "./SubCategoryList";

const MenuCategory = ({
  menu,
  hoveredMenu,
  hoveredMenu2,
  handleMouseEnter,
  handleMouseEnter2,
  handleMouseLeave2
}) => {
  const IconComponent = iconMap[menu.icon];

  return (
    <div className={styles.slidebottom}>
      <div
        className={styles.category}
        onMouseEnter={handleMouseEnter(menu.key)}
      >
        {IconComponent && <IconComponent className={styles.icon} />}
        {menu.label} <HiChevronRight />

        {hoveredMenu === menu.key &&
          (menu.subcategories ? (
            <SubCategoryList
              subcategories={menu.subcategories}
              hoveredMenu2={hoveredMenu2}
              handleMouseEnter2={handleMouseEnter2}
              handleMouseLeave2={handleMouseLeave2}
              className={menu.class}
            />
          ) : (
            <ul className={styles[menu.class]}>
              {menu.items.map((item, j) => (
                <li key={j} className={styles.category2}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
};

export default MenuCategory;
