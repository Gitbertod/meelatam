import React, { useState } from "react";
import styles from "./NavBar.module.css";
import ProductPhoto from "./ProductPhoto";
import { Link, useParams } from "react-router-dom";

const NestedItemList = ({ items, subCategoryId, categoryId }) => {
  const [estado3, setEstado3] = useState("");

  return (
    <ul className={styles.slideRight5}>
      <div className="flex">
        <div>
          {items.map((item, j) => {
            const slug = item.toLowerCase().replace(/\s+/g, "-");
            // Ruta dinámica:
            const route = `/productos/${categoryId}/${subCategoryId}/${slug}`;

            return (
              <li
                key={j}
                className={styles.category2}
                onMouseEnter={() => setEstado3(item)}
                onMouseLeave={() => setEstado3("")}
              >
                <Link to={route}>{item}</Link>
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
