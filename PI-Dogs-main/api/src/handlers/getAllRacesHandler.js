const getAllRaces = require("../controllers/getAllRaces");

const getAllRacesHandler = async (req, res) => {
  try {
    const races = await getAllRaces();
    res.status(200).json(races);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllRacesHandler;
