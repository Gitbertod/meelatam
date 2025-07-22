"use client";

import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { FaToolbox } from "react-icons/fa";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import styles from "./DrawerNavbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoMee from "../logoMee/LogoMee";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

export function DrawerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)} className={styles.burgerButon}>
          <GiHamburgerMenu className={styles.icon} />
        </Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className={styles.drawerLightBg}
      >
        <DrawerHeader
          titleIcon={() => (
            <>
              <LogoMee></LogoMee>
            </>
          )}
        />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    <Link to={"/productos"}>
                      <SidebarItem
                        href="/productos"
                        icon={HiCollection}
                        className={styles.textMenu}
                      >
                        Productos
                      </SidebarItem>
                    </Link>
                    <Link to={"/servicios"}>
                      <SidebarItem
                        href="/servicios"
                        icon={FaToolbox}
                        className={styles.textMenu}
                      >
                        Servicios
                      </SidebarItem>
                    </Link>
                    <Link to={"/acerca-de-nosotros"}>
                      <SidebarItem
                        href="/acerca-de-nosotros"
                        icon={HiUsers}
                        className={styles.textMenu}
                      >
                        Nosotros
                      </SidebarItem>
                    </Link>
                    <Link to={"/acerca-de-centiel"}>
                      <SidebarItem
                        href="/acerca-de-centiel"
                        icon={HiPencil}
                        className={styles.textMenu}
                      >
                        Acerca de Centiel
                      </SidebarItem>
                    </Link>
                    <Link to={"/noticias"}>
                      <SidebarItem
                        href="/noticias"
                        icon={HiClipboard}
                        className={styles.textMenu}
                      >
                        Noticias
                      </SidebarItem>
                    </Link>
                    <Link to={"/contacto"}>
                      <SidebarItem
                        href="/contacto"
                        icon={MdMail}
                        className={styles.textMenu}
                      >
                        Contacto
                      </SidebarItem>
                    </Link>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
