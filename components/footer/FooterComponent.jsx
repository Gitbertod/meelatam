import React from "react";
import styles from "./Footer.module.css";
import LogoMee from "../logoMee/LogoMee";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer container className={styles.container}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className={styles.logo}>
            <LogoMee ></LogoMee>
          </div>
          
          <FooterLinkGroup className={styles.option}>
            <FooterLink href="/servicios">Servicios</FooterLink>
            <FooterLink href="/noticias">Noticias</FooterLink>
            <FooterLink href="/contacto">Contacto</FooterLink>
            <FooterLink href="/acerca-de-sentiel">Acerca de sentiel</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className={styles.divider}/>
        <FooterCopyright href="#" by=" MEE. Todos los derechos reservados." year={2025} />
      </div>
    </Footer>
    // <div className={styles.container}>
    //   <div className={styles.logoMenuContainer}>
    //     <LogoMee></LogoMee>
    //     <ul className={styles.menu}>
    //       <li className={styles.option}>
    //         <a>NOSOTROS</a>
    //       </li>
    //       <li className={styles.option}>
    //         <a>NOTICIAS</a>
    //       </li>
    //       <li className={styles.option}>
    //         <a>CONTACTO</a>
    //       </li>
    //       <li className={styles.option}>
    //         <a>ACERCA DE CENTIEL</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <hr className={styles.divider}></hr>
    //   <div className="flex justify-center">
    //     <p>&copy; 2025 MEE. Todos los derechos reservados.</p>
    //   </div>
    // </div>
  );
};

export default FooterComponent;
