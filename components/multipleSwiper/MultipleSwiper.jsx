import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MultipleSwiper.module.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const clientes = [
  "Logo A&N.png",
  "Logo Cumbra.png",
  "Logo DP World.jpeg",
  "Logo Dragados.png",
  "Logo DRRP.jpeg"
];

const clientes2 = [
  "Logo M&J.jpeg",
  "Logo Macadam.png",
  "Logo Orygen.png",
  "Logo Pluz.png",
  "Logo Sacyr.png",
  "Imagen16.jpg",
  "Imagen18.jpg",
  "Imagen19.jpg",
  "Imagen20.jpg",
];

const clientes3 = [
  "Logo FCC.png",
  "Logo Ferrovial.png",
  "Logo IPK.jpeg",
  "Logo Lagardere.png",
  "Logo Macadam.png",
  "Imagen13.jpg",
  "Imagen14.jpg",
  "Imagen21.jpg",
  "Imagen22.jpg",
  "Imagen23.jpg",
  "Imagen24.jpg",
];

const clientes4 =["Imagen1.jpg",
    "Imagen2.jpg",
    "Imagen3.jpg",
    "Imagen4.jpg",
    "Imagen5.jpg",
    "Imagen6.jpg",
    "Imagen7.jpg",
    "Imagen8.jpg",
    "Imagen9.jpg",
    "Imagen11.jpg",
    "usil.jpg",
]


const MultipleSwiper = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.heading}>Clientes que han confiado en nosotros</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1, // Muy bajo para que no haya pausa
            disableOnInteraction: false,
          }}
          speed={3000} // Más alto = más suave y lento el movimiento
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
          {clientes.map((c) => (
            <SwiperSlide key={c}>
              <img
                src={`/LogosClientes/${c}`}
                alt={c}
                style={{
                  width: "100%",
                  maxHeight: "100px",
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
      <section className={styles.container}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1, // Muy bajo para que no haya pausa
            disableOnInteraction: false,
            reverseDirection:true
          }}
          speed={3000} // Más alto = más suave y lento el movimiento
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
          {clientes2.map((c) => (
            <SwiperSlide key={c}>
              <img
                src={`/LogosClientes/${c}`}
                alt={c}
                style={{
                  width: "100%",
                  maxHeight: "100px",
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
      <section className={styles.container}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1, // Muy bajo para que no haya pausa
            disableOnInteraction: false,
          }}
          speed={3000} // Más alto = más suave y lento el movimiento
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
          {clientes3.map((c) => (
            <SwiperSlide key={c}>
              <img
                src={`/LogosClientes/${c}`}
                alt={c}
                style={{
                  width: "100%",
                  maxHeight: "100px",
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
      <section className={styles.container}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1, // Muy bajo para que no haya pausa
            disableOnInteraction: false,
            reverseDirection:true
          }}
          speed={3000} // Más alto = más suave y lento el movimiento
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
          {clientes4.map((c) => (
            <SwiperSlide key={c}>
              <img
                src={`/LogosClientes/${c}`}
                alt={c}
                style={{
                  width: "100%",
                  maxHeight: "100px",
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
      
    </>
  );
};

export default MultipleSwiper;
