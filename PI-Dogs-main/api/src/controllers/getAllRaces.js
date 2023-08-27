require ('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env

const headers = {
    "Content-Type":"application/json",
    "x-api-key": API_KEY
}


const getAllRaces = async ()=>{

    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds', { headers })
    
    const  dataApi = data.map(dog => ({
        id: dog.id,
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life_span: dog.life_span,
        temperament: dog.temperament,
        image: dog.image.url,
    }));

    return dataApi;
}

module.exports = getAllRaces;