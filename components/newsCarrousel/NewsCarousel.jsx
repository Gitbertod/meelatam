import React from "react";
import styles from "./NewsCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const news = [
    {
        foto: "/casodeExito1.jpg",
        title: "Aeropuerto Internacional Jorge Chavez",
        description: "Planta de combustible",
        link:"/MEE_Caso_Exito_AIJCH Combustible_compressed.pdf",
    },
    {
        foto: "/casodeExito2.jpg",
        title: "Aeropuerto Internacional Jorge Chavez",
        description: "Lado Aire",
        link:"MEE_Caso_Exito_AIJCH Lado Aire I_compressed.pdf",
    },
    {
        foto: "/casodeExito3.jpg",
        title: "Aeropuerto Internacional Jorge Chavez",
        description: "Sub-Estaciones",
        link:"MEE_Caso_Exito_AIJCH Rectificadores_compressed.pdf",
    }, {
        foto: "/casodeExito4.jpg",
        title: "Aeropuerto Internacional Jorge Chavez",
        description: "Servicios I",
        link:"/MEE_Caso_Exito_AIJCH Servicios I_compressed.pdf",
    }, {
        foto: "/casodeExito5.jpg",
        title: "Aeropuerto Internacional Jorge Chavez",
        description: "Servicios II",
        link:"/MEE_Caso_Exito_AIJCH Servicios II_compressed.pdf",
    }, {
        foto: "/casodeExito6.jpg",
        link:"/MEE_Caso_Exito_Hospital PNP.pdf",
        title: "Hospital Nacional de la Policía Nacional del Perú",
        description: "Caso de éxito MEE Perú"
    }
]

const NewsCarousel = () => {
  return (
    <section className={styles.carousel}>
      <h2 className={styles.heading}>Últimas Noticias</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {news.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <img src={item.foto}></img>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={`/news/${item.link}`} className={styles.button} target="_blank">
                Leer más
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewsCarousel;
