import styles from "./ContactoForm.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactoForm = () => {
  const form = useRef();

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    motivo: "Solicitar cotización",
    message: "",
    prefer_contact: [],
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    message: false,
    prefer_contact: false,
  });

  const validate = () => {
    const { user_name, user_email, user_phone, message, prefer_contact } = values;
    const nameValid = /^[a-zA-Z\s]{2,30}$/.test(user_name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email);
    const phoneValid = user_phone === "" || /^[0-9+\-\s]{7,20}$/.test(user_phone);
    const messageValid = message.trim().length > 0;
    const preferValid = prefer_contact.length > 0;

    setErrors({
      user_name: !nameValid,
      user_email: !emailValid,
      user_phone: !phoneValid,
      message: !messageValid,
      prefer_contact: !preferValid,
    });

    return nameValid && emailValid && phoneValid && messageValid && preferValid;
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "prefer_contact") {
      setValues((prev) => {
        let updated = [...prev.prefer_contact];
        if (checked) {
          updated.push(value);
        } else {
          updated = updated.filter((v) => v !== value);
        }
        return { ...prev, prefer_contact: updated };
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (validate()) {
      sendEmail();
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos correctamente.",
        icon: "error",
      });
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_obc435d", "template_7nxofi3", form.current, {
        publicKey: "uwvK8fEa7bjaGHtJa",
      })
      .then(
        (result) => {
          form.current.reset();
          Swal.fire({
            title: "Mensaje enviado con éxito",
            icon: "success",
          });
          setValues({
            user_name: "",
            user_email: "",
            user_phone: "",
            motivo: "Solicitar cotización",
            message: "",
            prefer_contact: [],
          });
          setErrors({
            user_name: false,
            user_email: false,
            user_phone: false,
            message: false,
            prefer_contact: false,
          });
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar el mensaje.",
            icon: "error",
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleForm} className={styles.form}>
      <h5 className={styles.formTitle}>
        Formulario de contacto
      </h5>
      <div className={styles.field}>
        <label>Nombre</label>
        <input
          type="text"
          name="user_name"
          value={values.user_name}
          onChange={handleInputChange}
          className={errors.user_name ? styles.error : ""}
          placeholder="Tu nombre completo"
          autoComplete="off"
        />
        {errors.user_name && (
          <span className={styles.errorMsg}>
            Por favor, ingrese un nombre válido (2-30 caracteres).
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={values.user_email}
          onChange={handleInputChange}
          className={errors.user_email ? styles.error : ""}
          placeholder="correo@ejemplo.com"
          autoComplete="off"
        />
        {errors.user_email && (
          <span className={styles.errorMsg}>
            Por favor, ingrese un correo electrónico válido.
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label>Teléfono <span className={styles.optional}>(opcional)</span></label>
        <input
          type="text"
          name="user_phone"
          value={values.user_phone}
          onChange={handleInputChange}
          className={errors.user_phone ? styles.error : ""}
          placeholder="Ej: +58 412 1234567"
          autoComplete="off"
        />
        {errors.user_phone && (
          <span className={styles.errorMsg}>
            Por favor, ingrese un teléfono válido.
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label>Motivo de contacto</label>
        <select
          name="motivo"
          value={values.motivo}
          onChange={handleInputChange}
          className={styles.select}
        >
          <option>Solicitar cotización</option>
          <option>Soporte técnico</option>
          <option>Reclamos y sugerencias</option>
        </select>
      </div>
      <div className={styles.field}>
        <label>Mensaje</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleInputChange}
          className={errors.message ? styles.error : ""}
          placeholder="Escribe tu mensaje aquí..."
        />
        {errors.message && (
          <span className={styles.errorMsg}>
            Por favor, ingrese un mensaje.
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label>Prefiero que me contacten por:</label>
        <div className={styles.contactOptions}>
          <label className={styles.contactBox}>
            <input
              type="checkbox"
              name="prefer_contact"
              value="email"
              checked={values.prefer_contact.includes("email")}
              onChange={handleInputChange}
            />
            <span className={styles.boxLabel}>Email</span>
          </label>
          <label className={styles.contactBox}>
            <input
              type="checkbox"
              name="prefer_contact"
              value="telefono"
              checked={values.prefer_contact.includes("telefono")}
              onChange={handleInputChange}
            />
            <span className={styles.boxLabel}>Teléfono</span>
          </label>
        </div>
        {errors.prefer_contact && (
          <span className={styles.errorMsg}>
            Selecciona al menos una opción de contacto.
          </span>
        )}
      </div>
      <div className={styles.field}>
        <input type="submit" value="Enviar" className={styles.button} />
      </div>
    </form>
  );
};

export default ContactoForm;
