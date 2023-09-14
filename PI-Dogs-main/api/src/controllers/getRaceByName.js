require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

const getRaceByName = async (name) => {
  const { data } = await axios.get("https://api.thedogapi.com/v1/breeds", {
    headers,
  });

  const filtered = data.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  const dataApi = filtered.map((dog) => ({
    id: dog.id,
    image: dog.image.url,
    name: dog.name,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
    temperaments: dog.temperament,
  }));

  const dataBd = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const convertirTemperamentos = (temperaments) =>
    temperaments.map((temp) => temp.name).join(", ");

  const stringDataDb = dataBd.map((race) => ({
    id: race.id,
    image: race.image,
    name: race.name,
    height: race.height,
    weight: race.weight,
    life_span: race.life_span,
    temperaments: convertirTemperamentos(race.temperaments),
  }));

  const datos = [...stringDataDb, ...dataApi];
  // if (!datos.length)
  //   throw new Error("No se encontraron coincidencias. Verifique el nombre...");

  return datos;
};

module.exports = getRaceByName;
