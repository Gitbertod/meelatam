import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductoView.module.css";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import NavBar from "../components/navbar/NavBar";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import Footer from "../components/footer/Footer";
import { productsData } from "../src/productsData";

const ProductoView = ({ categoryId: staticCategoryId }) => {
  const { subCategoryId, subSubCategoryId, productoId } = useParams();
  const categoryId = staticCategoryId;

  const productObj = productsData.find(
    (item) =>
      (!categoryId || item.category === categoryId) &&
      (!subCategoryId || item.subcategory === subCategoryId) &&
      (!subSubCategoryId || item.subsubcategory === subSubCategoryId) &&
      item.url === productoId
  );
console.log(productObj)
  return (
    <>
      <NavBar />
      <div>
        <Breadcrumb />
        <section className={styles.container}>
          <article className={styles.textContent}>
            <h2 className={styles.title}>
              {productObj?.name || "Producto no encontrado"}
            </h2>
            <h3 className={styles.subtitle}>
              {productObj?.capacidades || ""}
            </h3>
            <div className={styles.description}>
              {productObj?.description
                ? productObj.description.split('\n').map((parrafo, idx) => (
                    <p key={idx}>{parrafo}</p>
                  ))
                : <p>Descripción no disponible.</p>
              }
            </div>
            <a href="/ficha-tecnica.pdf" download>
              <ButtonComponent text={"Descargar ficha técnica"} />
            </a>
          </article>
          <figure className={styles.imageWrapper}>
            <img
              src={productObj?.images?.[0] || "/TVA_1.png"}
              alt={productObj?.name || "Imagen del producto"}
              className={styles.image}
            />
          </figure>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductoView;
