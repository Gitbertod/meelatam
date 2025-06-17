import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MenuDataContext } from "../components/menuDataProvider/MenuDataProvider";
import styles from "./ProductosCategory.module.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";

const ProductosCategory = () => {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();
  const menuData = useContext(MenuDataContext);

  // Encuentra la categoría
  const categoryObj = menuData.find((cat) => cat.url === categoryId);
  // Encuentra la subcategoría
  const subCategoryObj = categoryObj?.subcategories?.find(
    (sub) => sub.url === subCategoryId
  );

  // Encuentra la subSubCategoría (si existe)
  const subSubCategoryObj = subCategoryObj?.subSubCategory?.find(
    (subsub) => subsub.url === (subSubCategoryId?.toLocaleLowerCase?.() || "")
  );

  // Determina qué items mostrar
  let itemsToShow = [];
  if (subSubCategoryId && subSubCategoryObj && Array.isArray(subSubCategoryObj.items)) {
    // Si hay subSubCategoryId, muestra solo esos items
    itemsToShow = subSubCategoryObj.items;
  } else if (subCategoryObj?.subSubCategory && Array.isArray(subCategoryObj.subSubCategory)) {
    // Si estamos en /productos/respaldo-de-energia/ups, juntar todos los items de todas las subSubCategory
    itemsToShow = subCategoryObj.subSubCategory.flatMap(subsub => subsub.items || []);
  } else if (subCategoryObj?.items && Array.isArray(subCategoryObj.items)) {
    itemsToShow = subCategoryObj.items;
  } else if (categoryObj?.items && Array.isArray(categoryObj.items)) {
    itemsToShow = categoryObj.items;
  }

  // Construye la ruta base para el producto
  let basePath = `/productos/${categoryId}`;
  if (subCategoryId) basePath += `/${subCategoryId}`;
  if (subSubCategoryId) basePath += `/${subSubCategoryId}`;

  return (
    <>
      <NavBar />
      <Breadcrumb />
      <div className={styles.container}>
        <h2>
          {subSubCategoryObj?.name ||
            subCategoryObj?.label ||
            categoryObj?.label ||
            "Categoría"}
        </h2>
        <div className={styles.cardsWrapper}>
          {itemsToShow.length > 0 ? (
            itemsToShow.map((item, idx) => (
              <div className={styles.card} key={item.url || idx}>
                <Link to={`${basePath}/${item.url}`}>
                  <img src={item.images?.[0]} alt={item.name} />
                </Link>
                <strong><h3>{item.name || item}</h3></strong>
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
