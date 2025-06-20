import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../src/productsData";
import ProductosCategory from "../../views/ProductosCategory";
import ProductoView from "../../views/ProductoView";

const ProductosSwitch = () => {
  const { categoryId, subCategoryId, param } = useParams();

  // ¿Existe un producto con esta combinación?
  const isProduct = productsData.some(
    (item) =>
      item.category === categoryId &&
      item.subcategory === subCategoryId &&
      item.url === param
  );

console.log("Is product?", isProduct);

  if (isProduct) {
    // Renderiza el detalle del producto
    return <ProductoView />;
  } else {
    // Renderiza la subSubCategory
    return <ProductosCategory />;
  }
};

export default ProductosSwitch;