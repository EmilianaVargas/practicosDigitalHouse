var express = require('express');
var router = express.Router();
let moviesController=require('../controllers/moviesController')
let middMovies = require ("../middlewares/middMovies")

router.get('/', moviesController.movies);

///movies/create 
router.get('/create', moviesController.createGet);
router.post('/create', middMovies.createMovie ,moviesController.create);

router.get('/new', moviesController.new);

// "rating mayor o igual a 8" - filtreé por recaudación ya que las peliculas no tienen rating asociado
router.get('/recommended', moviesController.recommended);

router.get('/detail/:id', moviesController.detail);
router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', middMovies.createMovie, moviesController.update);
router.delete('/delete/:id', moviesController.delete);

// movies/search (POST) - resultados de búsqueda. Cada título hipervínculo. Idealmente el usuario podría elegir el criterio de ordenamiento de los resultados 
router.post('/search', moviesController.search);

//listado con todas las películas del genero
router.get('/genreDetail/:id', moviesController.genreDetail);

//listado con todas las películas del actor
router.get('/actorDetail/:id', moviesController.actorDetail);

//nueva vinculacion de películas y actor
router.get('/actorMovie', moviesController.actorMovie);
router.post('/actorMovie', moviesController.actorNewMovie);

module.exports = router;
