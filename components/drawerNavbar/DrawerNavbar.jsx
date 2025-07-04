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
                    <SidebarItem href="/productos"  icon={HiCollection} className={styles.textMenu}>
                      Productos
                    </SidebarItem>
                    <SidebarItem href="/servicios" icon={FaToolbox} className={styles.textMenu}>
                      Servicios
                    </SidebarItem>
                    <SidebarItem href="/acerca-de-nosotros" icon={HiUsers} className={styles.textMenu}>
                      Nosotros
                    </SidebarItem>
                    <SidebarItem href="/acerca-de-centiel" icon={HiPencil} className={styles.textMenu}>
                      Acerca de Centiel
                    </SidebarItem>
                    <SidebarItem
                      href="/noticias"
                      icon={HiClipboard}
                      className={styles.textMenu}
                    >
                      Noticias
                    </SidebarItem>
                    <SidebarItem href="/contacto" icon={MdMail} className={styles.textMenu}>
                      Contacto
                    </SidebarItem>
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
