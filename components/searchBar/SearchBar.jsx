import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => (
  <div style={{ margin: "20px 0", textAlign: "center" }}>
    <input
      type="text"
      placeholder="Buscar producto por nombre..."
      value={value}
      onChange={onChange}
      className={styles.container}
      autoComplete="off"
    />
  </div>
);

export default SearchBar;