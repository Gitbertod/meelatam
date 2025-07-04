import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Contacto from "../views/Contacto";
import Noticias from "../views/Noticias";
import Servicios from "../views/Servicios"
import Nosotros from "../views/nosotros/Nosotros";
import ProductosCategory from "../views/ProductosCategory";
import ProductoView from "../views/ProductoView";
import AcercaDeCentiel from "../views/AcercaDeCentiel";
import ProductosSwitch from "../components/productSwitch/ProductSwitch";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/servicios" element={<Servicios />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="/acerca-de-nosotros" element={<Nosotros />}></Route>
      <Route path="/acerca-de-centiel" element={<AcercaDeCentiel />}></Route>
      <Route path="/productos/respaldo-de-energia" element={<ProductosCategory categoryId="respaldo-de-energia" />} />
      <Route path="/productos/respaldo-de-energia/ups" element={<ProductosCategory categoryId="respaldo-de-energia" subCategoryId="ups" />} />
      <Route path="/productos/respaldo-de-energia/ups/:subSubCategoryId" element={<ProductosCategory categoryId="respaldo-de-energia" subCategoryId="ups" />} />
      <Route path="/productos/respaldo-de-energia/ups/:subSubCategoryId/:productoId" element={<ProductoView categoryId="respaldo-de-energia" subCategoryId="ups" />} />
      <Route path="/productos/respaldo-de-energia/:subCategoryId" element={<ProductosCategory categoryId="respaldo-de-energia" />} />
      <Route path="/productos/respaldo-de-energia/:subCategoryId/:productoId" element={<ProductoView categoryId="respaldo-de-energia" />} />
      <Route path="/productos/calidad-de-energia" element={<ProductosCategory categoryId="calidad-de-energia" />} />
      <Route path="/productos/calidad-de-energia/:subCategoryId" element={<ProductosCategory categoryId="calidad-de-energia" />} />
      <Route path="/productos/calidad-de-energia/:subCategoryId/:productoId" element={<ProductoView categoryId="calidad-de-energia" />} />
      <Route path="/productos/clima-de-precision/:subCategoryId/" element={<ProductosCategory />} />
      <Route path="/productos/clima-de-precision" element={<ProductosCategory categoryId="clima-de-precision" />} />
      <Route path="/productos/accionamiento-electrico/:subCategoryId/" element={<ProductosCategory />} />
      <Route path="/productos/accionamiento-electrico/" element={<ProductosCategory categoryId="accionamiento-electrico"  />} />
      <Route path="/productos/:subSubCategoryId" element={<ProductosCategory />} />
      <Route path="/productos/:subSubCategoryId/:productoId" element={<ProductoView />} />
      <Route path="/productos/:param" element={<ProductosSwitch />} />
      <Route path="/productos/:categoryId/:subCategoryId/:subSubCategoryId/:productoId" element={<ProductoView />} />
      <Route path="/productos/:categoryId/:subCategoryId/:productoId" element={<ProductoView />} />
      <Route path="/productos/:categoryId/:subCategoryId/:subSubCategoryId" element={<ProductosCategory />} />
      <Route path="/productos/:categoryId/:subCategoryId" element={<ProductosCategory />} />
      <Route path="/productos/:categoryId" element={<ProductosCategory />} />
      <Route path="/productos" element={<ProductosCategory />} />
    </Routes>
  );
};

export default AppRoutes;
