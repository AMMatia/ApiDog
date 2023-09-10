const postRace = require("../controllers/postRace");

const postRaceHandler = async (req, res) => {
  const { image, name, height, weight, life_span, temperaments } = req.body;

  try {
    const newDog = await postRace(
      image,
      name,
      height,
      weight,
      life_span,
      temperaments
    );
    res.status(200).send("Se ha creado con exito pa");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = postRaceHandler;
