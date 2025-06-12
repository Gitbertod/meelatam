import React, { createContext } from "react";
import { menuData } from "../navbar/menuData.js";

export const MenuDataContext = createContext();

export const MenuDataProvider = ({ children }) => {
  return (
    <MenuDataContext.Provider value={menuData}>
      {children}
    </MenuDataContext.Provider>
  );
};
