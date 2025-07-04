import { useState } from "react";
import styles from "./NavBar.module.css";
import LogoMee from "../logoMee/LogoMee";
import SubNavContent from "./SubNavContent";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { DrawerNavbar } from "../drawerNavbar/DrawerNavbar";

const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [hoveredMenu2, setHoveredMenu2] = useState("");
  const [hoveredMenu3, setHoveredMenu3] = useState("");

  const handleMouseEnter2 = (menu) => () => setHoveredMenu2(menu);
  const handleMouseLeave2 = (menu) => () => setHoveredMenu2(menu);

  const handleMouseEnter = (menu) => () => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu("");

  const handleMouseEnter3 = (menu) => () => setHoveredMenu3(menu);
  const handleMouseLeave3 = () => setHoveredMenu3("");

  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <LogoMee />
      </Link>
      <div className={styles.optionsNav}>
        <div className={styles.subnav}>
          <button
            className={styles.subnavbtn}
            onMouseEnter={handleMouseEnter("productos")}
            onMouseLeave={handleMouseLeave}
          >
            Productos{" "}
            <HiChevronDown
              className={`${styles.iconChevron} ${
                hoveredMenu === "productos" ? styles.iconChevronRotated : ""
              }`}
            />
          </button>
          <SubNavContent
            hoveredMenu={hoveredMenu}
            hoveredMenu2={hoveredMenu2}
            hoveredMenu3={hoveredMenu3}
            handleMouseEnter={handleMouseEnter}
            handleMouseEnter2={handleMouseEnter2}
            handleMouseEnter3={handleMouseEnter3}
            handleMouseLeave={handleMouseLeave}
            handleMouseLeave2={handleMouseLeave2}
            handleMouseLeave3={handleMouseLeave3}
          />
        </div>

        {[
          <Link to={"/servicios"}>Servicios</Link>,
          <Link to={"/noticias"}>Noticias</Link>,
          <Link to={"/contacto"}>Contacto</Link>,
          <Link to={"/acerca-de-nosotros"}>Nosotros</Link>,
          <Link to={"/acerca-de-sentiel"}>Acerca de Centiel</Link>,
        ].map((text, idx) => (
          <div key={idx} className={styles.subnav}>
            <button className={styles.subnavbtn}>{text}</button>
          </div>
        ))}
      </div>
      <DrawerNavbar></DrawerNavbar>
    </div>
  );
};

export default NavBar;
