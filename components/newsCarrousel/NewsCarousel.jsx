import React from "react";
import styles from "./NewsCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const news = [
  {
    title: "Lanzamiento de nuevo producto",
    description: "Descubre las características del nuevo inversor solar.",
    link: "#",
  },
  {
    title: "Centiel en ExpoSolar",
    description: "Nuestra participación en la feria internacional de energía.",
    link: "#",
  },
  {
    title: "Nueva alianza estratégica",
    description: "Unimos fuerzas con una empresa líder del sector.",
    link: "#",
  },
  {
    title: "Certificación internacional",
    description: "Hemos obtenido la certificación ISO 9001.",
    link: "#",
  },
];

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
      >
        {news.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className={styles.button}>
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
