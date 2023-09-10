export default function validation(newDog) {
  const { name, height, weight, life_span, temperament } = newDog;
  const errors = {};

  const contieneSoloNumeros = (str) => /^\d+$/.test(str);

  const estaVacio = (str) => !str.trim();

  // Validación del nombre

  if (estaVacio(name)) errors.name = "Debe llenar el campo";
  if (name.length > 40)
    errors.name = "El nombre de la raza debe tener un máximo de 40 caracteres";
  if (name.length < 3)
    errors.name = "El nombre de la raza debe tener un mínimo de 3 caracteres";
  if (contieneSoloNumeros(name))
    errors.name = "El nombre de la raza no debe contener números";

  // Validación de la altura

  if (estaVacio(height.min) || estaVacio(height.max))
    errors.height = "Debe indicar la altura mínima y máxima de la raza";
  if (!contieneSoloNumeros(height.min) || !contieneSoloNumeros(height.max))
    errors.height = "Debe ingresar números solamente";
  if (parseInt(height.min) >= parseInt(height.max))
    errors.height =
      "La altura mínima de la raza no puede ser mayor o igual a la altura máxima";

  // Validación del peso
  if (estaVacio(weight.min) || estaVacio(weight.max))
    errors.weight = "Debe indicar el peso mínimo y máximo de la raza";
  if (!contieneSoloNumeros(weight.min) || !contieneSoloNumeros(weight.max))
    errors.weight = "Debe contener solo números";
  if (parseInt(weight.min) >= parseInt(weight.max))
    errors.weight =
      "El peso mínimo de la raza no puede ser mayor o igual al peso máximo";

  // Validación del tiempo de vida
  
  if (estaVacio(life_span.min) || estaVacio(life_span.max))
    errors.life_span =
      "Debe indicar el tiempo de vida mínimo y máximo de la raza";
  if (!contieneSoloNumeros(life_span.min) || !contieneSoloNumeros(life_span.max))
    errors.life_span = "Debe contener solo números";
  if (parseInt(life_span.min) >= parseInt(life_span.max))
    errors.life_span =
      "El tiempo de vida mínimo de la raza no puede ser mayor o igual al tiempo de vida máximo";

  // Validación de los temperamentos

  if (estaVacio(temperament))
    errors.temperament = "Debe asignar como mínimo un temperamento";

  return null;
}
