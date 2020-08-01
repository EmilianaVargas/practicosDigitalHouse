const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
const { options } = require('../routes/movies');

   let middMovies = {
        middNext: function(req, res, next){
            next();
        },
        createMovie: [
         check('title')
            .exists().withMessage('Título no definido.')
            .trim()
            .isLength({min: 3}).withMessage('Error: El Título debe tener al menos 3 caracteres.'),
         check('awards')
            .exists().withMessage('Cantidad de premios no detallada.')
            .trim()
            .isNumeric({min: 0}).withMessage('Error: La cantidad de premios debe ser 0 o un numero mayor.'),
         check('revenue')
            .exists().withMessage('Recaudación no definida.')
            .trim()
            .isNumeric().withMessage('Error: Recaudación no definida.'),
         check('release_date')
            .exists().withMessage('Fecha de estreno no definida.')
            .trim()
            .isDate().withMessage('Error: La Fecha de estreno debe tener el formato AAAA/MM/DD.'),
         check('length')
            .exists().withMessage('Duración no definida.')
            .isInt({min:60}).withMessage('La duración minima es de 60 minutos.'),
         check('genre_id')
            .exists().withMessage('Genero no definido.')
            .isNumeric({min:1}).withMessage('El genero no es válido.')
      ],
   }

module.exports = middMovies;