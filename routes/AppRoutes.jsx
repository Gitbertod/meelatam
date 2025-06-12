import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Contacto from "../views/Contacto";
import Noticias from "../views/Noticias";
import Servicios from "../views/Servicios"
import ProductosCategory from "../views/ProductosCategory";
import ProductoView from "../views/ProductoView";
import AcercaDeSentiel from "../views/AcercaDeSentiel";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/acerca-de-centiel" element={<AcercaDeSentiel />}></Route>
      <Route path="/productos/:categoryId" element={<ProductosCategory />} />
      <Route path="/productos/:categoryId/:subCategoryId" element={<ProductosCategory />}></Route>
      <Route path="/productos/:categoryId/:subCategoryId/:productoId" element={<ProductoView />}></Route>
    </Routes>
  );
};

export default AppRoutes;
