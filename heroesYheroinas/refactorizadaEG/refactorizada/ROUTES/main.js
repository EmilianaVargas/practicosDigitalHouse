// Require de Express
const express = require("express");

// ejecuta de Express las rutas
let router = express.Router();

//requiere el controller del mismo recurso a rutear
const mainController = require("../CONTROLLERS/mainController.js");


router.get('/', mainController.home);

router.get("/creditos", mainController.creditos);

router.get("*", mainController.status);

module.exports = router;