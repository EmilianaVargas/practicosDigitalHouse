// Require de Express
const express = require("express");

// ejecuta de Express las rutas
let router = express.Router();

//requiere el controller del mismo recurso a rutear
const heroesController = require("../CONTROLLERS/heroesController.js");

router.get('/', heroesController.heroesTodos);

router.get("/detalle/:id", heroesController.detalleId);

router.get("/:id/bio/:ok??", heroesController.bioId);


module.exports = router;