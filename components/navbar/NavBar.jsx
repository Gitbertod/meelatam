import { useState } from "react";
import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FaHistory, FaUniversity } from "react-icons/fa";
import LogoMee from "../logoMee/LogoMee";

const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState("");

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

          <div
            className={`${styles.subnavContent} ${
              hoveredMenu === "productos" ? styles.slidebottom : ""
            }`}
            onMouseEnter={handleMouseEnter("productos")}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <div
                className={styles.category}
                onMouseEnter={handleMouseEnter("respaldo")}
              >
                <IoPeopleSharp className={styles.icon} />
                RESPALDO DE ENERGÍA
                {hoveredMenu === "respaldo" ? (
                  <ul className={styles.slideRight}>
                    <li>UPS</li>
                    <li>Baterias</li>
                    <li>Inversores</li>
                    <li>Rectificadores</li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className={styles.slidebottom}>
              <div
                className={styles.category}
                onMouseEnter={handleMouseEnter("calidad")}
              >
                <GrContactInfo className={styles.icon} />
                CALIDAD DE ENERGÍA
              </div>
            </div>

            <div className={styles.slidebottom}>
              <div
                className={styles.category}
                onMouseEnter={handleMouseEnter("clima")}
              >
                <FaHistory className={styles.icon} />
                CLIMA DE PRECISIÓN
              </div>
            </div>

            <div className={styles.slidebottom}>
              <div
                className={styles.category}
                onMouseEnter={handleMouseEnter("accionamiento")}
              >
                <FaUniversity className={styles.icon} />
                ACCIONAMIENTO ELÉCTRICO
              </div>
            </div>
          </div>
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
