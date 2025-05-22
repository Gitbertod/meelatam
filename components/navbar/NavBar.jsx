import { useState } from "react";

import styles from "./NavBar.module.css";
import { IoPeopleSharp } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import {
  FaHistory,
  FaUniversity,
  FaFileContract,
  FaChartLine,
} from "react-icons/fa";
import { FaPeopleGroup, FaPeopleArrows, FaPeopleLine } from "react-icons/fa6";

const NavBar = () => {
  const [isOpenBusisnes, setIsOpenBusisnes] = useState(false);
  const [isOpenSectores, setIsOpenSectores] = useState(false);

  const handleAboutUsHover = () => setIsOpenBusisnes(true);
  const handleSectoresHover = () => setIsOpenSectores(true);
  const handleMouseLeave = () => {
    setIsOpenBusisnes(false);
    setIsOpenSectores(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <img
          src="/Recurso 2.svg"
          className={styles.logoSigma}
          alt="Sigma Logotipo"
        />

        <div className={styles.subnav}></div>
        <div className={styles.optionsNav}>
          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
            >
              PRODUCTOS
            </button>
            <div
              onMouseEnter={handleAboutUsHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenBusisnes ? styles.slidebottom : ""
              }`}
            >
              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <IoPeopleSharp className={styles.icon} />
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaHistory className={styles.icon} />
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaUniversity className={styles.icon} />
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <GrContactInfo className={styles.icon} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>SERVICIOS</button>
          </div>

          <div className={styles.subnav}>
            <button
              className={styles.subnavbtn}
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
            >
              NOTICIAS
            </button>
            <div
              onMouseEnter={handleSectoresHover}
              onMouseLeave={handleMouseLeave}
              className={`${styles.subnavContent} ${
                isOpenSectores ? styles.slidebottom : ""
              }`}
            >
              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaPeopleGroup className={styles.icon} />
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaPeopleArrows className={styles.icon} />
                </div>
              </div>

              <div className={styles.slidebottom}>
                <div className={styles.category}>
                  <FaPeopleLine className={styles.icon} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>CONTACTO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
