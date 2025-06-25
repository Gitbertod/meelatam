import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductoView.module.css";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import NavBar from "../components/navbar/NavBar";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import { productsData } from "../src/productsData";
import FooterComponent from "../components/footer/FooterComponent";

const ProductoView = ({ categoryId: staticCategoryId }) => {
  const { subCategoryId, subSubCategoryId, productoId } = useParams();
  const categoryId = staticCategoryId;

  // Scroll al top al montar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productObj = productsData.find(
    (item) =>
      (!categoryId || item.category === categoryId) &&
      (!subCategoryId || item.subcategory === subCategoryId) &&
      (!subSubCategoryId || item.subsubcategory === subSubCategoryId) &&
      item.url === productoId
  );
  console.log(productObj);
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
            <h3 className={styles.subtitle}>{productObj?.capacidades || ""}</h3>
            {productObj.tension ? <h3>Tensión: {productObj.tension}</h3> : ""}
            {productObj.frecuencia ? (
              <h3>Frecuencia: {productObj.frecuencia}</h3>
            ) : (
              ""
            )}{" "}
            {productObj.frecuenciaDeResonancia ? (
              <h3>
                Frecuencia de resonacia: {productObj.frecuenciaDeResonancia}
              </h3>
            ) : (
              ""
            )}
            {productObj.maxCorriente ? (
              <h3>Máx corriente: {productObj.maxCorriente}</h3>
            ) : (
              ""
            )}
            {productObj.factorDeForma ? (
              <h3>Factor de forma: {productObj.factorDeForma}</h3>
            ) : (
              ""
            )}
            {productObj.peso ? <h3>Peso Neto (Kg): {productObj.peso}</h3> : ""}
            {productObj.tipoDeEnchufe ? (
              <h3>Tipo de enchufe: {productObj.tipoDeEnchufe}</h3>
            ) : (
              ""
            )}
            {productObj.temperatura ? (
              <h3>Temperatura de funcionamiento: {productObj.temperatura}</h3>
            ) : (
              ""
            )}
            {productObj.tipoDeEnchufe ? (
              <h3>Longitud del cable: {productObj.longitudDelCable}</h3>
            ) : (
              ""
            )}
            {productObj.salida ? <h3>Salida: {productObj.salida}</h3> : ""}
            {productObj.dimensiones ? (
              <h3>
                Dimensiones, profundidad,x anchirax altura (mm):{" "}
                {productObj.dimensiones}
              </h3>
            ) : (
              ""
            )}
            {productObj.conmutacion ? (
              <h3>Conmutacion: {productObj.conmutacion}</h3>
            ) : (
              ""
            )}
            {productObj.potencia ? (
              <h3>Potencia: {productObj.potencia}</h3>
            ) : (
              ""
            )}
            {productObj.numeroDeEtapas ? (
              <h3>Numero de etapas: {productObj.numeroDeEtapas}</h3>
            ) : (
              ""
            )}
            {productObj.maxPotenciaPara1Panel ? (
              <h3>
                Máxima potencia para 1 panel: {productObj.maxPotenciaPara1Panel}
              </h3>
            ) : (
              ""
            )}
            <div className={styles.description}>
              {productObj?.description ? (
                productObj.description.split("\n").map((parrafo, idx) => (
                  <>
                    <p key={idx}>{parrafo}</p>
                    <br></br>
                  </>
                ))
              ) : (
                <p>Descripción no disponible.</p>
              )}
            </div>
            {productObj?.ul ? (
              <ul>
                {productObj.ul.split("\n").map((parrafo, idx) => (
                  <li key={idx}>{parrafo}</li>
                ))}
              </ul>
            ) : (
              <p>Descripción no disponible.</p>
            )}
            
            {productObj.normas ? <h3>Normas: {productObj.normas}</h3> : ""}
            <br></br>
            <a href={`/docs/${productObj.pdf}`} target="_blank" rel="noopener noreferrer">
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
      <FooterComponent />
    </>
  );
};

export default ProductoView;
