import React, { useState } from "react";
import styles from "./NavBar.module.css";
import ProductPhoto from "./ProductPhoto";
import { Link } from "react-router-dom";

const NestedItemList = ({ items, subCategoryId, categoryId }) => {
  const [estado3, setEstado3] = useState("");

  return (
    <ul className={styles.slideRight5}>
      <div className="flex">
        <div>
          {items.map((item, j) => {
            // Si item es un objeto, usa sus propiedades; si es string, úsalo directamente
            const name = typeof item === "object" ? item.name : item;
            const slug = typeof item === "object" ? item.url : item.toLowerCase().replace(/\s+/g, "-");
            const route = `/productos/${categoryId}/${subCategoryId}/${slug}`;

            return (
              <li
                key={j}
                className={styles.category2}
                onMouseEnter={() => setEstado3(name)}
                onMouseLeave={() => setEstado3("")}
              >
                <Link to={route}>{name}</Link>
              </li>
            );
          })}
        </div>
        <div>
          <ProductPhoto estado3={estado3} />
        </div>
      </div>
    </ul>
  );
};

export default NestedItemList;
