import React from "react";
import "./App.css";
import AppRoutes from "../routes/AppRoutes";
import { MenuDataProvider } from "../components/menuDataProvider/MenuDataProvider";

function App() {
  return (
    <>
      <MenuDataProvider>
        <AppRoutes />
      </MenuDataProvider>
    </>
  );
}

export default App;
