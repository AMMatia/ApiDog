const getTemperaments = require ('../controllers/getTemperaments');
const { Temperaments } = require ('../db')

const getTemperamentsHandler = async (req,res)=>{
    try {
        
        const temp = await getTemperaments();
        res.status(200).json(temp)

    } catch (error) {
        
        res.status(400).json({ error: error.message })
    }
}

module.exports = getTemperamentsHandler;