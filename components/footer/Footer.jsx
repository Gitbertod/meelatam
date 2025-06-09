import React from "react";
import styles from "./Footer.module.css";
import LogoMee from "../logoMee/LogoMee";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoMenuContainer}>
        <LogoMee></LogoMee>
        <ul className={styles.menu}>
          <li className={styles.option}>
            <a>NOSOTROS</a>
          </li>
          <li className={styles.option}>
            <a>NOTICIAS</a>
          </li>
          <li className={styles.option}>
            <a>CONTACTO</a>
          </li>
          <li className={styles.option}>
            <a>ACERCA DE CENTIEL</a>
          </li>
        </ul>
      </div>
      <hr className={styles.divider}></hr>
      <div className="flex justify-center">
        <p>&copy; 2025 MEE. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
