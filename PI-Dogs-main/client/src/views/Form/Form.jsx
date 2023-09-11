import { useDispatch, useSelector } from "react-redux";
import validations from "./validations";
import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { createDog, getDogs, getTemps } from "../../redux/actions";

export default function Form() {
  const [selectedTemps, setSelectedTemps] = useState([]);
  const { temps } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [created, setCreated] = useState({
    image: "",
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_spanMin: "",
    life_spanMax: "",
    temperaments: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCreated({ ...created, [name]: value });
    setErrors(validations({ ...created, [name]: value }));
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
      image: created.image,
      name: created.name,
      height: `${created.heightMin} - ${created.heightMax}`,
      weight: `${created.weightMin} - ${created.weightMax}`,
      life_span: `${created.life_spanMin} - ${created.life_spanMax} years`,
      temperaments: created.temperaments,
    };
    dispatch(createDog(transformedCreated));
    dispatch(getDogs());
    
  };

  useEffect(() => {
    dispatch(getTemps());
  }, []);

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>

        <label>Imagen:</label>
        <input name="image" value={created.image} onChange={handleChange} />
        {errors.image && <p>{errors.image}</p>}

        <label>Nombre:</label>
        <input name="name" value={created.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}

        <div className={styles.minMax}>
          <label>Altura mínima:</label>
          <input
            name="heightMin"
            value={created.heightMin}
            onChange={handleChange}
          />

          <label>Altura máxima:</label>
          <input
            name="heightMax"
            value={created.heightMax}
            onChange={handleChange}
          />
        </div>
          {errors.height && <p>{errors.height}</p>}

        <div className={styles.minMax}>
          <label>Peso mínimo:</label>
          <input
            name="weightMin"
            value={created.weightMin}
            onChange={handleChange}
          />

          <label>Peso máximo:</label>
          <input
            name="weightMax"
            value={created.weightMax}
            onChange={handleChange}
          />
        </div>
          {errors.weight && <p>{errors.weight}</p>}

        <div>
          <label>Años de vida mínimos:</label>
          <input
            name="life_spanMin"
            value={created.life_spanMin}
            onChange={handleChange}
          />

          <label>Años de vida máximo:</label>
          <input
            name="life_spanMax"
            value={created.life_spanMax}
            onChange={handleChange}
          />
        </div>
          {errors.life_span && <p>{errors.life_span}</p>}

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
        {errors.temperaments && <p>{errors.temperaments}</p>}
        <button>Agregar</button>
      </form>
    </div>
  );
}
