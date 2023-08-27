const getRaceById = require('../controllers/getRaceById');

const getRaceByIdHandler =async (req,res)=>{
    const {id} = req.params;
    const tipoId = isNaN(id) ? 'bdd' : 'api'
    try {

        const race = await getRaceById(id,tipoId)
        res.status(200).json(race);

    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = getRaceByIdHandler;