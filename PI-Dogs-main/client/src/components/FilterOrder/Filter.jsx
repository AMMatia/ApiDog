import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./Filter.module.css";
import { changePage, filter } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const { temps, dogs } = useSelector((state) => state);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedTemps, setSelectedTemps] = useState([]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleOptionToggle = (temp) => {
    if (selectedTemps.includes(temp)) {
      setSelectedTemps(selectedTemps.filter((item) => item !== temp));
    } else {
      setSelectedTemps([...selectedTemps, temp]);
    }
  };

  const handleFilter = () => {
    toggleFilter();

    const selectedTempsString = selectedTemps.join(",");

    const dogsFiltered = dogs.filter((dog) => {
      if (dog.temperaments) {
        const dogTemperaments = dog.temperaments
          .split(",")
          .map((temp) => temp.trim());
        const selectedTempsArray = selectedTempsString.split(",");

        return selectedTempsArray.every((temp) =>
          dogTemperaments.includes(temp)
        );
      }
      return false;
    });
    dispatch(filter(dogsFiltered));
    dispatch(changePage(1));
  };

  return (
    <div >
      <button onClick={toggleFilter}>
        {showFilter ? "Ocultar Filtro" : "Mostrar Filtro"}
      </button>
      
      {showFilter && (
        <div className={styles.filterContainer}>
          <label>Selecciona temperamentos:</label>
          <div className={styles.lista}>
  {temps.map((temp, index) => (
    <label key={index} className={styles.label}>
      <input
        type="checkbox"
        checked={selectedTemps.includes(temp.name)}
        onChange={() => handleOptionToggle(temp.name)}
      />
      {temp.name}
    </label>
  ))}
</div>
          <button onClick={handleFilter}>Aplicar</button>
          {selectedTemps.length > 0 && (
            <div>
              <p>Temperamentos seleccionados: {selectedTemps.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
