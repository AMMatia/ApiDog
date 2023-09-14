import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./Filter.module.css";
import {
  changePage,
  filterTemp,
  filterOrigin,
  getDogs,
} from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const { temps, dogs } = useSelector((state) => state);
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterT, setShowFilterT] = useState(false);
  const [selectedTemps, setSelectedTemps] = useState([]);
  const [filteredOrigin, setFilteredOrigin] = useState(false);

  const handleOrigin = (value) => {
    let created;
    switch (value) {
      case "a":
        created = dogs.filter((dog) => dog.created);
        break;
      case "b":
        created = dogs.filter((dog) => !dog.created);
        break;
      default:
        return;
    }
    if (!created.length) window.alert("No se han encontrado coincidencias");
    else {
      dispatch(filterOrigin(created));
      setFilteredOrigin(true);
      dispatch(changePage(1));
    }
  };
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleFilterT = () => {
    setShowFilterT(!showFilterT);
  };

  const handleOptionTemps = (temp) => {
    if (selectedTemps.includes(temp)) {
      setSelectedTemps(selectedTemps.filter((item) => item !== temp));
    } else {
      setSelectedTemps([...selectedTemps, temp]);
    }
  };

  const handleFilterTemps = () => {
    toggleFilterT();

    const dogsFilteredT = dogs.filter((dog) => {
      if (dog.temperaments) {
        const dogTemperaments = dog.temperaments
          .split(",")
          .map((temp) => temp.trim());

        return selectedTemps.every((temp) => dogTemperaments.includes(temp));
      }
      return false;
    });
    if (!dogsFilteredT.length)
      window.alert("No se han encontrado coincidencias");
    else {
      dispatch(filterTemp(dogsFilteredT));
      dispatch(changePage(1));
    }
  };

  const cleanFilter = () => {
    dispatch(filterOrigin([]));
    dispatch(filterTemp([]));
    dispatch(getDogs());
    setFilteredOrigin(false);
    setSelectedTemps([]);
    dispatch(changePage(1));
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleFilter}>
        {showFilter ? "Ocultar Filtro" : "Filtrar por origen de creación"}
      </button>
      {showFilter && (
        <div>
          <button onClick={() => handleOrigin("a")} value="a">
            Creados por el usuario
          </button>
          <button onClick={() => handleOrigin("b")} value="b">
            Creados por la api
          </button>
        </div>
      )}
      <div className={styles.buttonsDown}>
        <button onClick={toggleFilterT}>
          {showFilterT ? "Ocultar Filtro" : "Filtrar por temperamentos"}
        </button>
        {showFilterT && (
          <button
            onClick={handleFilterTemps}
            disabled={selectedTemps.length === 0}
            className={styles.button}
          >
            Aplicar filtro
          </button>
        )}
        <button
          onClick={cleanFilter}
          style={{
            display:
              selectedTemps.length > 0 || filteredOrigin ? "block" : "none",
          }}
        >
          Quitar filtro
        </button>
      </div>

      {showFilterT && (
        <div className={styles.filterContent}>
          <div className={styles.lista}>
            {temps.map((temp, index) => (
              <label key={index} className={styles.label}>
                <input
                  type="checkbox"
                  checked={selectedTemps.includes(temp.name)}
                  onChange={() => handleOptionTemps(temp.name)}
                />
                {temp.name}
              </label>
            ))}
          </div>

          <div>
            <p>Temperamentos seleccionados: {selectedTemps.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
