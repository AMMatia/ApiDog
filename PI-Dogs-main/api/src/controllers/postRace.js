const { Dog, Temperament } = require("../db");

const postRace = async (
  image,
  name,
  height,
  weight,
  life_span,
  temperaments
) => {
  if (!(name && height && weight && life_span && image && temperaments))
    return "Faltan datos";

  const [dog, created] = await Dog.findOrCreate({
    where: { image, name, height, weight, life_span },
  });

  await dog.setTemperaments(temperaments);

  return dog;
};

module.exports = postRace;
