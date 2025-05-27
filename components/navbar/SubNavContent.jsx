import React from "react";
import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FaHistory, FaUniversity } from "react-icons/fa";

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
      <div>
        <div
          className={styles.category}
          onMouseEnter={handleMouseEnter("respaldo")}
        >
          <IoPeopleSharp className={styles.icon} />
          RESPALDO DE ENERGÍA
          {hoveredMenu === "respaldo" ? (
            <ul className={styles.slideRight}>
              <li
                onMouseEnter={handleMouseEnter2("ups")}
                onMouseLeave={handleMouseLeave2}
                className={styles.category2}
              >
                UPS
                {hoveredMenu2 === "ups" ? (
                  <ul className={styles.slideRight5}>
                    <li>UPS Interactivas </li>
                    <li>UPS Monofásicas</li>
                    <li>UPS Trimono</li>
                    <li>UPS Trifásicas</li>
                    <li>UPS Modulares</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li
                onMouseEnter={handleMouseEnter2("baterias")}
                onMouseLeave={handleMouseLeave2("")}
                className={styles.category2}
              >
                Baterias
                {hoveredMenu2 === "baterias" ? (
                  <ul className={styles.slideRight5}>
                    <li>Beterias test</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={styles.category2}>Inversores</li>
              <li className={styles.category2}>Rectificadores</li>
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
          {hoveredMenu === "calidad" ? (
            <ul className={styles.slideRight2}>
              <li className={styles.category2}>Banco de condensadores</li>
              <li className={styles.category2}>Filtros activos</li>
              <li className={styles.category2}>Transformadores</li>
              <li className={styles.category2}>Estabilizadores de voltaje</li>
              <li className={styles.category2}>PDU</li>
              <li className={styles.category2}>STS</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.slidebottom}>
        <div
          className={styles.category}
          onMouseEnter={handleMouseEnter("clima")}
        >
          <FaHistory className={styles.icon} />
          CLIMA DE PRECISIÓN
          {hoveredMenu === "clima" ? (
            <ul className={styles.slideRight3}>
              <li className={styles.category2}>Chillers</li>
              <li className={styles.category2}>Equipos perimetrales</li>
              <li className={styles.category2}>Equipos in row</li>
              <li className={styles.category2}>Equipos tipo mochila</li>
              <li className={styles.category2}>
                Aire acondicionado de precisión
              </li>
              <li className={styles.category2}>STS</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.slidebottom}>
        <div
          className={styles.category}
          onMouseEnter={handleMouseEnter("accionamiento")}
        >
          <FaUniversity className={styles.icon} />
          ACCIONAMIENTO ELÉCTRICO
          {hoveredMenu === "accionamiento" ? (
            <ul className={styles.slideRight4}>
              <li className={styles.category2}>Variadores de frecuencia</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNavContent;
