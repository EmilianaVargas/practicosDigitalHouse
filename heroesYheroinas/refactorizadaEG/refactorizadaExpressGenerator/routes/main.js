var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

//requiere el controller del mismo recurso a rutear
const mainController = require("../controllers/mainController.js");

router.get('/', mainController.home);
router.get("/creditos", mainController.creditos);
router.get("*", mainController.status);

module.exports = router;