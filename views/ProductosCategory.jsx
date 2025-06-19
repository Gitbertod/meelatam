import React from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../src/productsData";
import styles from "./ProductosCategory.module.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";

const ProductosCategory = () => {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();

  // Filtrado de productos según los parámetros de la URL
  let filteredProducts = productsData;

  if (categoryId) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === categoryId
    );
  }
  if (subCategoryId) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subcategory === subCategoryId
    );
  }
  if (subSubCategoryId) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subsubcategory === subSubCategoryId
    );
  }

  // Construye la ruta completa para cada producto
  const getProductRoute = (product) => {
    let route = `/productos/${product.category}`;
    if (product.subcategory) route += `/${product.subcategory}`;
    if (product.subsubcategory) route += `/${product.subsubcategory}`;
    route += `/${product.url}`;
    return route;
  };

  return (
    <>
      <NavBar />
      <Breadcrumb />
      <div className={styles.container}>
        <h2>
          {subSubCategoryId ||
            subCategoryId ||
            categoryId ||
            "Todos los productos"}
        </h2>
        <div className={styles.cardsWrapper}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, idx) => (
              <div className={styles.card} key={item.url || idx}>
                <Link to={getProductRoute(item)}>
                  <img src={item.images?.[0]} alt={item.name} />
                </Link>
                <strong>
                  <h3>{item.name}</h3>
                </strong>
                {item.capacidades && (
                  <p>
                    Capacidades: {item.capacidades}
                  </p>
                )}
                {/* Puedes agregar más campos aquí */}
              </div>
            ))
          ) : (
            <p>No hay productos para mostrar.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductosCategory;
