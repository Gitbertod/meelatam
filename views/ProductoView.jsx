import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductoView.module.css";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import NavBar from "../components/navbar/NavBar";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import Footer from "../components/footer/Footer";
import { MenuDataContext } from "../components/menuDataProvider/MenuDataProvider";

const ProductoView = () => {
  const breadCrumbsItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Respaldo de energia", href: "/productos/respaldo-de-energia" },
    { label: "UPS", href: "/productos/respaldo-de-energia/ups" },
    { label: "UPS Interactivas", href: "/UPS-Interactivas" },
  ];

  const menuData = useContext(MenuDataContext);
  const { categoryId, subCategoryId, productoId } = useParams();

  // Encuentra la categoría
  const categoryObj = menuData?.find((cat) => cat.url === categoryId);

  // Encuentra la subcategoría
  const subCategoryObj = categoryObj?.subcategories?.find(
    (sub) => sub.url === subCategoryId
  );

  // Encuentra el producto
  const productObj = subCategoryObj?.items?.find(
    (item) => item.url === productoId
  );

  return (
    <>
      <NavBar />
      <div>
        <Breadcrumb items={breadCrumbsItems} />
        <section className={styles.container}>
          <article className={styles.textContent}>
            <h2 className={styles.title}>
              {productObj?.name || "Producto no encontrado"}
            </h2>
            <h3 className={styles.subtitle}>
              Capacidades: 600 VA | 800 VA | 1200 VA | 1500 VA | 2000 VA
            </h3>
            <p className={styles.description}>
              {productObj?.description ||
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ducimus sunt similique dolor quis! Rerum suscipit, sequi dolorem, nulla qui totam quaerat sapiente, sit repellat minus illo ratione vero quasi!"}
            </p>
            <a href="/ficha-tecnica.pdf" download>
              <ButtonComponent text={"Descargar ficha técnica"} />
            </a>
          </article>
          <figure className={styles.imageWrapper}>
            <img
              src="/TVA_1.png"
              alt="Imagen del producto"
              className={styles.image}
            />
          </figure>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductoView;
