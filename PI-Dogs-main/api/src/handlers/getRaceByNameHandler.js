const getRaceByName = require ('../controllers/getRaceByName')


const getRaceByNameHandler = async (req,res) => {
    const { name } = req.query;
    
    try {
        
        const dog = await getRaceByName(name)
        
        res.status(200).json(dog)
    } catch (error) {
        
        res.status(400).json({ error: error.message })
    }
}

module.exports = getRaceByNameHandler;