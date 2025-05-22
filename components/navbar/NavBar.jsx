import { useState } from "react";

import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { FaHistory, FaUniversity } from "react-icons/fa";
import LogoMee from "../logoMee/LogoMee";
import MenuItem from "../menuItem/MenuItem";
import { Divider, Menu, Switch } from "antd";

const NavBar = () => {
  const [isOpenProductos, setIsOpenProductos] = useState(false);
  const [isOpenRespaldo, setIsOpenRespaldo] = useState(false);

  const handleProductos = () => setIsOpenProductos(true);
  const handleRespaldoEnergia = () => setIsOpenRespaldo(true);
  
  const handleMouseLeave = () => {
    setIsOpenProductos(false);
    setIsOpenSectores(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <LogoMee></LogoMee>
        <div className={styles.subnav}></div>
        <div className={styles.optionsNav}>
          <div className={styles.subnav}>
            <a>
              <button
                className={styles.subnavbtn}
                onMouseEnter={handleProductos}
                onMouseLeave={handleMouseLeave}
              >
                PRODUCTOS
              </button>
            </a>
            <div
              onMouseEnter={handleProductos}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenProductos ? styles.slidebottom : ""
              }`}
            >
           
              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <IoPeopleSharp className={styles.icon} />
                  RESPALDO DE ENERGÍA
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <GrContactInfo className={styles.icon} />
                  CALIDAD DE ENERGÍA
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaHistory className={styles.icon} />
                  CLIMA DE PRECISION
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaUniversity className={styles.icon} />
                  ACCIONAMIENTO ELÉCTRICO
                </div>
              </div>
            </div>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>SERVICIOS</button>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>NOTICIAS</button>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>CONTACTO</button>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>ACERCA DE CENTIEL</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
