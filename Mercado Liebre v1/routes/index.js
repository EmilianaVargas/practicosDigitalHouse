var express = require('express');
var router = express.Router();

let mainController=require("../controllers/mainController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//requiere el controller del mismo recurso a rutear
// const indexController = require("../controllers/indexController");
// router.get('/', idexController.home);
// router.get("/visitados", idexController.visitados);
// router.get("/ofertas", idexController.ofertas);



router.get('/', mainController.index);

module.exports = router;