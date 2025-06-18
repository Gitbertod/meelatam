import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css"; // Crea este archivo para estilos

function toTitleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Construye los breadcrumbs dinámicamente
  const crumbs = [
    { label: "Inicio", to: "/" },
    ...pathnames.map((segment, idx) => {
      const to = "/" + pathnames.slice(0, idx + 1).join("/");
      return {
        label: toTitleCase(segment),
        to,
      };
    }),
  ];

  return (
    <nav className={styles.breadcrumb}>
      {crumbs.map((crumb, idx) => (
        <span key={crumb.to}>
          <Link to={crumb.to} className={styles.link}>
            {crumb.label}
          </Link>
          {idx < crumbs.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
