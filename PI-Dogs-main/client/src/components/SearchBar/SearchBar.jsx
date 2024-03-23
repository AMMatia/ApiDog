import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  byName,
  changePage,
  filterOrigin,
  filterTemp,
  getDogs,
} from "../../redux/actions";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [searched, setSearched] = useState(false);
  const [buscados,setBuscados] = useState([])
  const { filtered, dogs } = useSelector((state) => state);
  const handleChange = (event) => setName(event.target.value);

  const onSearch = () => {
    setBuscados(dispatch(byName(name)))
    if (!dogs.length) window.alert("No se han encontrado coincidencias");
    dispatch(changePage(1));
    setName("");
    setSearched(true);


  };

  const onBack = () => {
    if (filtered.length) {
      dispatch(filterTemp(filtered));
      dispatch(filterOrigin(filtered));
    } else {
      dispatch(getDogs());
      dispatch(changePage(1));
    }
    setSearched(false);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.searchInput}
        value={name}
        onChange={handleChange}
        placeholder="Buscar raza..."
      />
      <button
        className={styles.button}
        onClick={() => {
          onSearch();
        }}
        disabled={name.length < 3}
      >
        Buscar
      </button>
      {searched && (
        <button
          className={styles.button}
          onClick={() => {
            onBack();
          }}
        >
          Volver
        </button>
      )}
    </div>
  );
}
