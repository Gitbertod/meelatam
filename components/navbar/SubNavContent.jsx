// SubNavContent.jsx
import React from "react";
import styles from "./NavBar.module.css";
import { menuData } from "./menuData";
import MenuCategory from "./MenuCategory";

const SubNavContent = ({
  hoveredMenu,
  hoveredMenu2,
  hoveredMenu3,
  handleMouseEnter,
  handleMouseEnter2,
  handleMouseEnter3,
  handleMouseLeave,
  handleMouseLeave2,
  handleMouseLeave3,
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
          hoveredMenu3={ hoveredMenu3}
          handleMouseEnter={handleMouseEnter}
          handleMouseEnter2={handleMouseEnter2}
          handleMouseEnter3={handleMouseEnter3}
          handleMouseLeave2={handleMouseLeave2}
          handleMouseLeave3={handleMouseLeave3}
        />
      ))}
    </div>
  );
};

export default SubNavContent;
