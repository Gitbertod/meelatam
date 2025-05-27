import { useState } from "react";
import styles from "./NavBar.module.css";
import LogoMee from "../logoMee/LogoMee";
import SubNavContent from "./SubNavContent";

const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [hoveredMenu2, setHoveredMenu2] = useState("");

  const handleMouseEnter2 = (menu) => () => setHoveredMenu2(menu);
  const handleMouseLeave2 = (menu) => () => setHoveredMenu2(menu);

  const handleMouseEnter = (menu) => () => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu("");

  return (
    <div className={styles.navbar}>
      <LogoMee />

      <div className={styles.optionsNav}>
        <div className={styles.subnav}>
          <button
            className={styles.subnavbtn}
            onMouseEnter={handleMouseEnter("productos")}
            onMouseLeave={handleMouseLeave}
          >
            PRODUCTOS
          </button>
      <SubNavContent
        hoveredMenu={hoveredMenu}
        hoveredMenu2={hoveredMenu2}
        handleMouseEnter={handleMouseEnter}
        handleMouseEnter2={handleMouseEnter2}
        handleMouseLeave={handleMouseLeave}
        handleMouseLeave2={handleMouseLeave2}
      />
        </div>

        {["SERVICIOS", "NOTICIAS", "CONTACTO", "ACERCA DE CENTIEL"].map(
          (text) => (
            <div key={text} className={styles.subnav}>
              <button className={styles.subnavbtn}>{text}</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NavBar;
