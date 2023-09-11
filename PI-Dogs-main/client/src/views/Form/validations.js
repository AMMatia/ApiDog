export default function validation(newDog) {
  const {
    image,
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_spanMin,
    life_spanMax,
    temperaments,
  } = newDog;
  const errors = {};

  const contieneSoloNumeros = (str) => /^\d+$/.test(str);

  const estaVacio = (str) => !str.trim();

  // Validación de la imagen

  if (estaVacio(image)) errors.image = "Debe ingresar el link de una imagen";

  // Validación del nombre

  if (estaVacio(name)) errors.name = "Debe llenar el campo";
  else if (name.length > 40)
    errors.name = "El nombre de la raza debe tener un máximo de 40 caracteres";
  else if (name.length < 3)
    errors.name = "El nombre de la raza debe tener un mínimo de 3 caracteres";
  else if (contieneSoloNumeros(name))
    errors.name = "El nombre de la raza no debe contener números";

  // Validación de la altura

  if (!heightMin.length || !heightMax.length)
    errors.height = "Debe indicar la altura mínima y máxima de la raza";
  else if (!contieneSoloNumeros(heightMin) || !contieneSoloNumeros(heightMax))
    errors.height = "Debe ingresar números solamente";
  else if (parseInt(heightMin) >= parseInt(heightMax))
    errors.height =
      "La altura mínima de la raza no puede ser mayor o igual a la altura máxima";


  // Validación del peso
  if (!weightMin.length || !weightMax.length)
    errors.weight = "Debe indicar el peso mínimo y máximo de la raza";

  else if (!contieneSoloNumeros(weightMin) || !contieneSoloNumeros(weightMax))
    errors.weight = "Debe ingresar números solamente";

  else if (parseInt(weightMin) >= parseInt(weightMax))
    errors.weight =
      "El peso mínimo de la raza no puede ser mayor o igual al peso máximo";


  // Validación del tiempo de vida

  if (!life_spanMin.length || !life_spanMax.length)
    errors.life_span =
      "Debe indicar el tiempo de vida mínimo y máximo de la raza";
  else if (!contieneSoloNumeros(life_spanMin) || !contieneSoloNumeros(life_spanMax))
    errors.life_span = "Debe ingresar números solamente";
  else if (parseInt(life_spanMin) >= parseInt(life_spanMax))
    errors.life_span =
      "El tiempo de vida mínimo de la raza no puede ser mayor o igual al tiempo de vida máximo";

  // Validación de los temperamentos

  if (!(temperaments.length > 0))
    errors.temperaments = "Debe asignar como mínimo un temperamento";

  return errors;
}
