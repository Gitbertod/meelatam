import React from "react";
import styles from "./ProductoView.module.css";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import NavBar from "../components/navbar/NavBar";
import LogoMee from "../components/logoMee/LogoMee";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import Footer from "../components/footer/Footer";

const ProductoView = () => {
  const breadCrumbsItems = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Respaldo de energia", href: "/respaldo-de-energia" },
    { label: "UPS", href: "/ups" },
    { label: "UPS Interactivas", href: "/UPS-Interactivas" },
  ];
  return (
    <>
      <NavBar />
      <div>
        <Breadcrumb items={breadCrumbsItems} />
        <section className={styles.container}>
          <article className={styles.textContent}>
            <h2 className={styles.title}>Título del Producto</h2>
            <h3 className={styles.subtitle}>
              Capacidades: 600 VA | 800 VA | 1200 VA | 1500 VA | 2000 VA
            </h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              ducimus sunt similique dolor quis! Rerum suscipit, sequi dolorem,
              nulla qui totam quaerat sapiente, sit repellat minus illo ratione
              vero quasi!
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
