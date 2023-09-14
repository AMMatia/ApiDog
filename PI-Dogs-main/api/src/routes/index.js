const { Router } = require("express");
const getAllRacesHandler = require("../handlers/getAllRacesHandler");
const getRaceByNameHandler = require("../handlers/getRaceByNameHandler");
const getRaceByIdHandler = require("../handlers/getRaceByIdHandler");
const postRaceHandler = require("../handlers/postRaceHandler");
const getTemperamentsHandler = require("../handlers/getTemperamentsHandlers");



const router = Router();


router.get("/", getAllRacesHandler);
router.get("/name", getRaceByNameHandler);
router.get("/temperaments", getTemperamentsHandler);
router.get("/:id", getRaceByIdHandler);
router.post("/", postRaceHandler);
module.exports = router;
