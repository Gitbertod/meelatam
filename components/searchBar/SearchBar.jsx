import React from "react";
import styles from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => (
  <div className={styles.searchBarWrapper}>
    <input
      type="text"
      placeholder="Buscar producto por nombre..."
      value={value}
      onChange={onChange}
      className={styles.input}
      autoComplete="off"
    />
    <span className={styles.icon}>
      <FiSearch />
    </span>
  </div>
);

export default SearchBar;
