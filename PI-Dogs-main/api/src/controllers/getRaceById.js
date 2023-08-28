require ('dotenv').config()
const axios = require ('axios');
const { Dogs, Temperaments } = require ('../db');


const { API_KEY } = process.env

const headers = {
    "Content-Type":"application/json",
    "x-api-key": API_KEY
}

const getRaceById = async(id,tipoId)=>{
    
    if ( tipoId === 'api' ){
        
        const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`, { headers })
        if( !( Object.keys(data).length ) ) return `No se encontró raza con id: ${id}`

        const {reference_image_id,name,height,weight,life_span,temperament} = data

        const urlImg  = `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`

        const race = {
            id,
            image:urlImg,
            name,
            height:height.metric,
            weight:weight.metric,
            life_span,
            temperament,
        }
        
        return race;
   }else{

    const race = await Dogs.findByPk(id,
        { include:{
        model:Temperaments,
        attributes: ['name'],
        through:{
            attributes:[]
        }
    } } )
    if(!race) return `No se encontró raza con id: ${id}`
    return race;
   }

}

module.exports = getRaceById;