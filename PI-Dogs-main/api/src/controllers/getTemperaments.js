const axios = require ('axios');
require ('dotenv').config()
const { Temperaments } = require ('../db')
const { API_KEY } = process.env

const headers = {
    "Content-Type":"application/json",
    "x-api-key": API_KEY
}

const getTemperaments = async ()=>{
    
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds`, { headers })
    const setTemps = new Set();

    const promises = data.map(async (dogs) => {

        if (dogs.temperament) {
          const temperaments = dogs.temperament.split(',');
          for (const temp of temperaments) {
            setTemps.add(temp.trim());
          }
        }
      });
    
      await Promise.all(promises);
    
      setTemps.forEach(async (temp) => {
        await Temperaments.findOrCreate({
          where: { name: temp }
        });
      });

    const races = await Temperaments.findAll()
    
    return races;
}

module.exports = getTemperaments;