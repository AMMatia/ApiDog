const {  Dogs, Temperaments } = require ('../db')


const postRace = async (image, name, height, weight, life_span,temperament) => {

    if(!(name && height && weight && life_span && image && temperament)) return 'Faltan datos';

    const [dog, created] = await Dogs.findOrCreate({
        where: { image, name, height, weight, life_span},
    });

    await dog.setTemperaments(temperament);

    return dog;
}

module.exports = postRace;