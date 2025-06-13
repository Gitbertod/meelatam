import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MenuDataContext } from "../components/menuDataProvider/MenuDataProvider";
import styles from "./ProductosCategory.module.css"; // Crea este archivo para estilos de las cards

const ProductosCategory = () => {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams();
  const menuData = useContext(MenuDataContext);


  // Encuentra la categoría
  const categoryObj = menuData.find(cat => cat.url === categoryId);
  // Encuentra la subcategoría
  const subCategoryObj = categoryObj?.subcategories?.find(sub => sub.url === subCategoryId);
  
  // Encuentra la subSubCategoría (si existe)
  const subSubCategoryObj = subCategoryObj?.subSubCategory?.find(subsub => subsub.url === subSubCategoryId.toLocaleLowerCase());
 
  // Determina qué items mostrar
  let itemsToShow = [];
  if (subSubCategoryObj && Array.isArray(subSubCategoryObj.items)) {
    itemsToShow = subSubCategoryObj.items;
  } else if (subCategoryObj?.items && Array.isArray(subCategoryObj.items)) {
    itemsToShow = subCategoryObj.items;
  } else if (categoryObj?.items && Array.isArray(categoryObj.items)) {
    itemsToShow = categoryObj.items;
  }

  return (
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
              <h3>{item.name || item}</h3>
              {item.capacidades && <p><strong>Capacidades:</strong> {item.capacidades}</p>}
              
              {/* Puedes agregar más campos aquí */}
            </div>
          ))
        ) : (
          <p>No hay productos para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default ProductosCategory;