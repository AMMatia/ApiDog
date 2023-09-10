require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

const getAllRaces = async () => {
  const { data } = await axios.get("https://api.thedogapi.com/v1/breeds", {
    headers,
  });
  console.log("cantidad de perros", data.length);
  const dataApi = data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
    temperaments: dog.temperament,
    image: dog.image.url,
    created: false,
  }));

  const dataDb = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const normalizedDataDb = dataDb.map((dog) => ({
    id: dog.id,
    name: dog.name,
    height: dog.height,
    weight: dog.weight,
    life_span: dog.life_span,
    temperaments: dog.temperaments.map((temp) => temp.name).join(", "),
    image: dog.image,
    created:true,
  }));


  return [...normalizedDataDb, ...dataApi];
};



module.exports = getAllRaces;
