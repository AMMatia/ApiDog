import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { byName, changePage, getDogs } from "../../redux/actions";
import { useState } from "react";
import styles from "./SearchBar.module.css"; 

export default function SearchBar() {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);
  const [name, setName] = useState("");
  const handleChange = (event) => setName(event.target.value);

  const onSearch = async () => {
    await dispatch(byName(name));
    dispatch(changePage(1));
  };
  const onBack = () => {
    dispatch(getDogs());
    dispatch(changePage(1));
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles["search-input"]} 
        value={name}
        onChange={handleChange}
      />
      <button
        className={styles.button} 
        onClick={() => {
          onSearch();
        }}
      >
        Buscar
      </button>
      <button
        className={styles.button} 
        onClick={() => {
          onBack();
        }}
      >
        Volver
      </button>

    </div>
  );
}