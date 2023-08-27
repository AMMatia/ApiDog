const { Router } = require('express');
const getAllRacesHandler = require ('../handlers/getAllRacesHandler')
const getRaceByNameHandler = require ('../handlers/getRaceByNameHandler');
const getRaceByIdHandler = require ('../handlers/getRaceByIdHandler')
const postRaceHandler= require ('../handlers/postRaceHandler')
const getTemperamentsHandler = require('../handlers/getTemperamentsHandlers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',getAllRacesHandler)
router.get('/name',getRaceByNameHandler)
router.get('/temperaments',getTemperamentsHandler)
router.post('/',postRaceHandler)
router.get('/:id',getRaceByIdHandler)
module.exports = router;
