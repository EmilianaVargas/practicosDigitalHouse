var express = require('express');
var router = express.Router();
let moviesController=require('../controllers/moviesController')


// movies (GET) - listar todas. Cada título debe ser hipervínculo para ver el detalle de la misma.
router.get('/', moviesController.movies);

// movies/new (GET) -  últimas 5 películas por fecha de estreno . hipervínculo 
router.get('/new', moviesController.new);

// movies/recommended (GET) - rating mayor o igual a 8. hipervínculo 
router.get('/recommended', moviesController.recommended);

// movies/detail/:id (GET) - id que aparezca en la URL -  y contar con dos (2) botones de acción: BORRAR y MODIFICAR.
router.get('/detail/:id', moviesController.detail);
router.get('/:id/edit', moviesController.edit);

router.put('/:id/update', moviesController.update);
router.delete('/:id/delete', moviesController.delete);

// movies/search (POST) - resultados de búsqueda. Cada título hipervínculo. Idealmente el usuario podría elegir el criterio de ordenamiento de los resultados 
router.post('/search', moviesController.search);

module.exports = router;
