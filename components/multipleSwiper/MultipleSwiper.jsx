import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MultipleSwiper.module.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/**
 * Componente reutilizable de Swiper para mostrar logos o imágenes en carrusel.
 * @param {Array} items - Array de nombres de archivo o rutas relativas de imágenes.
 * @param {string} folder - Carpeta base donde están las imágenes (ej: "/logosClientes").
 * @param {string} [title] - Título opcional para la sección.
 * @param {number} [maxHeight=100] - Altura máxima de las imágenes (en px).
 * @param {boolean} [reverse=false] - Si el carrusel debe ir en dirección inversa.
 */
const MultipleSwiper = ({
  items = [],
  folder = "",
  title = "",
  maxHeight = 100,
  reverse = false,
}) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        speed={3000}
        grabCursor={false}
        allowTouchMove={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((c) => (
          <SwiperSlide key={c}>
            <img
              src={`${folder.replace(/\/$/, "")}/${c}`}
              alt={c}
              style={{
                width: "100%",
                maxHeight: `${maxHeight}px`,
                minHeight: `${maxHeight}px`,
                objectFit: "contain",
                margin: "0 auto",
                display: "block",
                background: "#fff",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MultipleSwiper;
