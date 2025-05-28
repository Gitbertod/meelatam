// SubNavContent.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { iconMap } from "./MenuIcons";
import { menuData } from "./menuData";
import { HiChevronRight } from "react-icons/hi";

const SubNavContent = ({
  hoveredMenu,
  hoveredMenu2,
  handleMouseEnter,
  handleMouseEnter2,
  handleMouseLeave,
  handleMouseLeave2
}) => {
  return (
    <div
      className={`${styles.subnavContent} ${
        hoveredMenu === "productos" ? styles.slidebottom : ""
      }`}
      onMouseEnter={handleMouseEnter("productos")}
      onMouseLeave={handleMouseLeave}
    >
      {menuData.map((menu) => {
        const IconComponent = iconMap[menu.icon];
        

        return (
          <div key={menu.key} className={styles.slidebottom}>
            <div
              className={styles.category}
              onMouseEnter={handleMouseEnter(menu.key)}
            >
              {IconComponent && <IconComponent className={styles.icon} />}
              {menu.label} <HiChevronRight />

              {hoveredMenu === menu.key &&
                (menu.subcategories ? (
                  <ul className={styles[menu.class]}>
                    {menu.subcategories.map((sub, i) => (
                      <li
                        key={i}
                        onMouseEnter={
                          sub.key ? handleMouseEnter2(sub.key) : undefined
                        }
                        onMouseLeave={sub.key ? handleMouseLeave2 : undefined}
                        className={styles.category2}
                      >
                        {sub.label} <HiChevronRight />
                        {sub.key && hoveredMenu2 === sub.key && sub.items && (
                          <ul className={styles.slideRight5}>
                            {sub.items.map((item, j) => (
                              <li className={styles.category2}key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
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
      })}
    </div>
  );
};

export default SubNavContent;
