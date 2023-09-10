import React, { useState } from "react";

function FilterComponent() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Manzana", "Plátano", "Naranja", "Uva", "Fresa"
  ];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <button onClick={toggleOptions}>
        {showOptions ? "Ocultar Opciones" : "Mostrar Opciones"}
      </button>
      
      {showOptions && (
        <div>
          <label>Selecciona frutas:</label>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionToggle(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedOptions.length > 0 && (
        <div>
          <p>Frutas seleccionadas: {selectedOptions.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default FilterComponent;