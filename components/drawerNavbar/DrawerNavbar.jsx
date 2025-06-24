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
                    <SidebarItem href="/servicios" icon={HiUsers} className={styles.textMenu}>
                      Servicios
                    </SidebarItem>
                    <SidebarItem href="/acerca-de-sentiel" icon={HiPencil} className={styles.textMenu}>
                      Acerca de Sentiel
                    </SidebarItem>
                    <SidebarItem
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                      className={styles.textMenu}
                    >
                      Noticias
                    </SidebarItem>
                    <SidebarItem href="/contacto" icon={HiLogin} className={styles.textMenu}>
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
