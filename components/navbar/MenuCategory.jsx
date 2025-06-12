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
  hoveredMenu3,
  handleMouseEnter,
  handleMouseEnter2,
  handleMouseEnter3,
  handleMouseLeave2,
  handleMouseLeave3
}) => {
  const IconComponent = iconMap[menu.icon];

  console.log(menu)
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
              hoveredMenu3={hoveredMenu3}
              handleMouseEnter2={handleMouseEnter2}
              handleMouseEnter3={handleMouseEnter3}
              handleMouseLeave2={handleMouseLeave2}
              handleMouseLeave3={handleMouseLeave3}
              className={menu.class}
              menuLabel={menu.label}
              categoryId={menu.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") } 
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
