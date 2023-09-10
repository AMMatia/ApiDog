import { useDispatch, useSelector } from "react-redux";
import validations from "./validations";
import { useState } from "react";
import styles from "./Form.module.css";
import { createDog, getDogs } from "../../redux/actions";

export default function Form() {
  const [selectedTemps, setSelectedTemps] = useState([]);
  const { temps } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [created, setCreated] = useState({
    image: "",
    name: "",
    height: { min: "", max: "" },
    weight: { min: "", max: "" },
    life_span: { min: "", max: "" },
    temperaments: [],
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  
    // Divide el campo 'name' en un array para acceder a las subpropiedades
    const nameParts = name.split('.');
  
    // Copia el estado 'created' actual
    const updatedCreated = { ...created };
  
    if (nameParts.length === 2) {
      // Actualiza los valores de 'min' o 'max' según corresponda
      updatedCreated[nameParts[0]][nameParts[1]] = value;
    } else {
      // Actualiza 'name' o 'image'
      updatedCreated[name] = value;
    }
  
    // Actualiza el estado 'created' con los nuevos valores
    setCreated(updatedCreated);
  };

  const handleOptionToggle = (temp) => {
    if (selectedTemps.includes(temp)) {
      setSelectedTemps(selectedTemps.filter((item) => item !== temp));
    } else {
      setSelectedTemps([...selectedTemps, temp]);
    }
    setCreated({ ...created, temperaments: selectedTemps });
  };

  const onSubmit = (event) => {
    const transformedCreated = {
      ...created,
      height: `${created.height.min} - ${created.height.max}`,
      weight: `${created.weight.min} - ${created.weight.max}`,
      life_span: `${created.life_span.min} - ${created.life_span.max} years`,
    };
    dispatch(createDog(transformedCreated));
    dispatch(getDogs())
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer} >
      <form className={styles.form} onSubmit={onSubmit}>
        <label>Imagen:</label>
        <input name="image" value={created.image} onChange={handleChange} />

        <label>Nombre:</label>
        <input name="name" value={created.name} onChange={handleChange} />

        <div className={styles.minMax}>
          <label>Altura mínima:</label>
          <input
            name="height.min"
            value={created.height.min}
            onChange={handleChange}
          />

          <label>Altura máxima:</label>
          <input
            name="height.max"
            value={created.height.max}
            onChange={handleChange}
          />
        </div>

        <div className={styles.minMax}>
          <label>Peso mínimo:</label>
          <input
            name="weight.min"
            value={created.weight.min}
            onChange={handleChange}
          />

          <label>Peso máximo:</label>
          <input
            name="weight.max"
            value={created.weight.max}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Años de vida mínimos:</label>
          <input
            name="life_span.min"
            value={created.life_span.min}
            onChange={handleChange}
          />

          <label>Años de vida máximo:</label>
          <input
            name="life_span.max"
            value={created.life_span.max}
            onChange={handleChange}
          />
        </div>
        
        <label>Temperamentos:</label>
        <ul className={styles.lista}>
          {temps.map((temp) => (
            <label>
              <input
                type="checkbox"
                checked={selectedTemps.includes(temp.id.toString())}
                onChange={() => handleOptionToggle(temp.id.toString())}
              />
              {temp.name}
            </label>
          ))}
        </ul>
        <button>Agregar</button>
      </form>
    </div>
  );
}
