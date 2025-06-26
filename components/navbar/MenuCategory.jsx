// MenuCategory.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { HiChevronRight } from "react-icons/hi";
import { iconMap } from "./menuIcons";
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
  handleMouseLeave3,
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
              {menu.items.map((item, j) => {
                // Convierte el nombre del item a url amigable
                const itemUrl =
                  typeof item === "string"
                    ? item
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[áéíóúñ]/g, (c) => ({
                          á: "a",
                          é: "e",
                          í: "i",
                          ó: "o",
                          ú: "u",
                          ñ: "n",
                        }[c]))
                    : item.url; // Si el item es un objeto, usa su url

                const linkTo = `/productos/${menu.url}/${itemUrl}`;

                return (
                  <Link to={linkTo} key={j}>
                    <li className={styles.category2}>
                      {typeof item === "string" ? item : item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          ))}
      </div>
    </div>
  );
};

export default MenuCategory;
