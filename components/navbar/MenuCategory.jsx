// MenuCategory.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";
import { iconMap } from "./MenuIcons";
import SubCategoryList from "./SubCategoryList";
import { Link } from "react-router-dom";

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

  // Ruta especial para baterías
  const isBaterias = menu.label === "Baterías";
  const bateriasLink = "/productos/respaldo-de-energia/baterias";

  return (
    <div className={styles.slidebottom}>
      <div
        className={styles.category}
        onMouseEnter={handleMouseEnter(menu.key)}
      >
        {IconComponent && <IconComponent className={styles.icon} />}
        {isBaterias ? (
          <Link to={bateriasLink} className={styles.categoryLink}>
            {menu.label}
          </Link>
        ) : (
          menu.label
        )}{" "}
        <HiChevronRight />
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
              categoryId={menu.url}
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
