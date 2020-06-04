var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


//requiere el controller del mismo recurso a rutear
const heroesController = require("../controllers/heroesController.js");

router.get('/', heroesController.heroesTodos);
router.get("/detalle/:id", heroesController.detalleId);
router.get("/:id/bio/:ok??", heroesController.bioId);

module.exports = router;