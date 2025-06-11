import React from "react";
import { Link } from "react-router-dom"; // si estás usando React Router
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index !== items.length - 1 ? (
              <Link to={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
