import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Contacto from "../views/Contacto";
import Noticias from "../views/Noticias";
import Servicios from "../views/Servicios"
import ProductosCategory from "../views/ProductosCategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/productos/:categoryId" element={<ProductosCategory />}></Route>

    </Routes>
  );
};

export default AppRoutes;
