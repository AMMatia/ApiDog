const postRace = require('../controllers/postRace')

const postRaceHandler = async (req,res)=>{
    const { image,name, height, weight, life_span,temperament} = req.body;

    try {
       
        const newDog = await postRace(image,name, height, weight, life_span,temperament)
        res.status(200).json(newDog)
    
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}
module.exports = postRaceHandler;