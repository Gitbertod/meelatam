// SubNavContent.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { menuData } from "./menuData";
import MenuCategory from "./MenuCategory";

const SubNavContent = ({
  hoveredMenu,
  hoveredMenu2,
  handleMouseEnter,
  handleMouseEnter2,
  handleMouseLeave,
  handleMouseLeave2,
}) => {
  return (
    <div
      className={`${styles.subnavContent} ${
        hoveredMenu === "productos" ? styles.slidebottom : ""
      }`}
      onMouseEnter={handleMouseEnter("productos")}
      onMouseLeave={handleMouseLeave}
    >
      {menuData.map((menu) => (
        <MenuCategory
          key={menu.key}
          menu={menu}
          hoveredMenu={hoveredMenu}
          hoveredMenu2={hoveredMenu2}
          handleMouseEnter={handleMouseEnter}
          handleMouseEnter2={handleMouseEnter2}
          handleMouseLeave2={handleMouseLeave2}
        />
      ))}
    </div>
  );
};

export default SubNavContent;
