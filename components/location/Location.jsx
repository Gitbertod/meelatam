"use client";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styles from "./Location.module.css";
import LogoMee from "../logoMee/LogoMee";

export function Location() {
  return (
    <div className={styles.locationCard}>
      <h5 className={styles.title}>Lima, Perú</h5>

      <iframe
        id="inlineFrameExample"
        title="Ubicación en Google Maps"
        width="100%"
        height="400"
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4579037811145!2d-77.01336502418351!3d-12.149197443817947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8727ee2d8a3%3A0x10b4001e87aa2d35!2sMEE%20PERU%20SAC!5e0!3m2!1ses-419!2spe!4v1751293765921!5m2!1ses-419!2spe"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
      <h5 className={styles.subtitle}>
        <LogoMee></LogoMee>
      </h5>
      <div className={styles.infoRow}>
        <FaLocationDot className={styles.icon} />
        <p className={styles.infoText}>
          Jr. Camino Real 1801, Mz. B, Lt. 04 (Parque Industrial San Pedrito I).
          Santiago de Surco – Lima. Perú
        </p>
      </div>
      <div className={styles.infoRow}>
        <BsFillTelephoneFill className={styles.icon} />
        <a href="tel:+51 1 717 4517" className={styles.infoText}>
          +51(01)6117100
        </a>
      </div>
      <div className={styles.infoRow}>
        <MdEmail className={styles.icon} />
        <a href="mailto:contacto@meelatam.com">contacto@meelatam.com</a>
      </div>
    </div>
  );
}
