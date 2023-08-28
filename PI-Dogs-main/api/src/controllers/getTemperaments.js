const axios = require ('axios');
require ('dotenv').config()
const { Temperaments } = require ('../db')
const { API_KEY } = process.env

const headers = {
  "Content-Type":"application/json",
  "x-api-key": API_KEY,
}

const getTemperaments = async ()=>{
    
  const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds`, { headers })
  const setTemps = new Set();

  data.forEach((dogs) => {
    if (dogs.temperament) {
      const temperaments = dogs.temperament.split(',');
      for (const temp of temperaments) {
        setTemps.add(temp.trim());
      }
    }
  });
  
  const promesas = Array.from(setTemps).map(async (temp) => {
    await Temperaments.create({ name: temp });
  });

  await Promise.all(promesas)
  const temp = await Temperaments.findAll({attributes:['name']});
  return temp;
}

module.exports = getTemperaments;