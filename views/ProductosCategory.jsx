import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../src/productsData";
import styles from "./ProductosCategory.module.css";
import NavBar from "../components/navbar/NavBar";
import FooterComponent from "../components/footer/FooterComponent";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import SearchBar from "../components/searchBar/SearchBar";

const ProductosCategory = ({ categoryId: staticCategoryId, subCategoryId: staticSubCategoryId }) => {
  const params = useParams();
  const categoryId = staticCategoryId;
  const subCategoryId = staticSubCategoryId || params.subCategoryId;
  const subSubCategoryId = params.subSubCategoryId;

  const [search, setSearch] = useState("");

  // 1. Elimina duplicados por url
  const uniqueProducts = useMemo(() => {
    const seen = new Set();
    return productsData.filter((item) => {
      if (seen.has(item.url)) return false;
      seen.add(item.url);
      return true;
    });
  }, [productsData]);

  // 2. Filtrado memoizado para evitar duplicados
  const filteredProducts = useMemo(() => {
    let result = uniqueProducts;
    if (categoryId) {
      result = result.filter((p) => p.category === categoryId);
    }
    if (subCategoryId) {
      result = result.filter((p) => p.subcategory === subCategoryId);
    }
    if (subSubCategoryId) {
      result = result.filter((p) => p.subsubcategory === subSubCategoryId);
    }
    return result;
  }, [uniqueProducts, categoryId, subCategoryId, subSubCategoryId]);

  // Función para normalizar texto (quita tildes y pasa a minúsculas)
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quita tildes
      .replace(/\s+/g, " ")            // quita espacios extra
      .trim();
  }

  // Filtrar por búsqueda usando normalización
  const searchedProducts = filteredProducts.filter((item) =>
    normalize(item.name).includes(normalize(search))
  );

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
          {subSubCategoryId || subCategoryId || categoryId || "Todos los productos"}
        </h2>
        {/* Barra de búsqueda modularizada */}
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
        <div className={styles.cardsWrapper}>
          {searchedProducts.length > 0 ? (
            searchedProducts.map((item, idx) => (
              <div className={styles.card} key={item.url || idx}>
                <Link to={getProductRoute(item)}>
                  <img src={item.images?.[0]} alt={item.name} />
                </Link>
                <strong>
                  <h3>{item.name}</h3>
                </strong>
                {item.subcategory && (
                  <p>
                    {item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1)}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No hay productos para mostrar.</p>
          )}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ProductosCategory;
