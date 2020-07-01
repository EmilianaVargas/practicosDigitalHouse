var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

const middUploadFile = require('../middlewares/middUploadFile');


//rutas de login
router.get('/login',usersController.login);
router.post('/login', usersController.login_post);

//rutas de registro
router.get('/register',usersController.register);
router.post('/register', middUploadFile.uploadFile, usersController.register_post);

//ruta de perfil
router.get('/profile', usersController.profile)

module.exports = router;
