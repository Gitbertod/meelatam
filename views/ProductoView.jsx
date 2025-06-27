import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import styles from "./ProductoView.module.css";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";
import NavBar from "../components/navbar/NavBar";
import ButtonComponent from "../components/buttonComponent/ButtonComponent";
import { productsData } from "../src/productsData";
import FooterComponent from "../components/footer/FooterComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const ProductoView = ({ categoryId: staticCategoryId }) => {
  const { subCategoryId, subSubCategoryId, productoId } = useParams();
  const categoryId = staticCategoryId;

  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // Estado para los thumbs
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animación al montar el componente
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, []);

  const productObj = productsData.find(
    (item) =>
      (!categoryId || item.category === categoryId) &&
      (!subCategoryId || item.subcategory === subCategoryId) &&
      (!subSubCategoryId || item.subsubcategory === subSubCategoryId) &&
      item.url === productoId
  );

  // Si no hay imágenes, usa una por defecto
  const images =
    productObj?.images && productObj.images.length > 0
      ? productObj.images
      : ["/TVA_1.png"];

  return (
    <>
      <NavBar />
      <div>
        <Breadcrumb />
        <section className={styles.container}>
          <article className={styles.textContent} ref={contentRef}>
            <h2 className={styles.title}>
              {productObj?.name || "Producto no encontrado"}
            </h2>
            <h3 className={styles.subtitle}>{productObj?.capacidades || ""}</h3>
            {productObj.tension && <h3>Tensión: {productObj.tension}</h3>}
            {productObj.frecuencia && <h3>Frecuencia: {productObj.frecuencia}</h3>}
            {productObj.frecuenciaDeResonancia && (
              <h3>Frecuencia de resonancia: {productObj.frecuenciaDeResonancia}</h3>
            )}
            {productObj.maxCorriente && <h3>Máx corriente: {productObj.maxCorriente}</h3>}
            {productObj.factorDeForma && <h3>Factor de forma: {productObj.factorDeForma}</h3>}
            {productObj.peso && <h3>Peso Neto (Kg): {productObj.peso}</h3>}
            {productObj.tipoDeEnchufe && <h3>Tipo de enchufe: {productObj.tipoDeEnchufe}</h3>}
            {productObj.temperatura && (
              <h3>Temperatura de funcionamiento: {productObj.temperatura}</h3>
            )}
            {productObj.tipoDeEnchufe && (
              <h3>Longitud del cable: {productObj.longitudDelCable}</h3>
            )}
            {productObj.salida && <h3>Salida: {productObj.salida}</h3>}
            {productObj.dimensiones && (
              <h3>
                Dimensiones, profundidad x anchura x altura (mm): {productObj.dimensiones}
              </h3>
            )}
            {productObj.conmutacion && <h3>Conmutación: {productObj.conmutacion}</h3>}
            {productObj.potencia && <h3>Potencia: {productObj.potencia}</h3>}
            {productObj.numeroDeEtapas && <h3>Número de etapas: {productObj.numeroDeEtapas}</h3>}
            {productObj.maxPotenciaPara1Panel && (
              <h3>Máxima potencia para 1 panel: {productObj.maxPotenciaPara1Panel}</h3>
            )}

            <div className={styles.description}>
              {productObj?.description ? (
                productObj.description.split("\n").map((parrafo, idx) => (
                  <React.Fragment key={idx}>
                    <p>{parrafo}</p>
                    <br />
                  </React.Fragment>
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

            {productObj.normas && <h3>Normas: {productObj.normas}</h3>}

            <br />
            <a
              href={`/docs/${productObj.pdf}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonComponent text={"Descargar ficha técnica"} />
            </a>
          </article>
          <figure className={styles.imageWrapper} ref={imageRef}>
            {/* Swiper principal */}
            <Swiper
              style={{ width: "100%", marginBottom: 16 }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Zoom]}
              zoom={true}
              className={styles.mainSwiper}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      alt={productObj?.name || "Imagen del producto"}
                      className={styles.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Swiper de miniaturas */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={Math.min(images.length, 5)}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.thumbsSwiper}
              style={{ marginTop: 8 }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className={styles.thumbImage}
                    style={{
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 6,
                      border: "2px solid #eee",
                      cursor: "pointer",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </figure>
        </section>
      </div>
      <FooterComponent />
    </>
  );
};

export default ProductoView;

