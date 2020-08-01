let db = require('../database/models/index');
const Movie = require('../database/models/Movie');
let sequelize = db.sequelize;
const Op = db.Sequelize.Op;



let moviesController = {
    movies:function(req,res){
        db.Movie.findAll()
        .then(function(peliculas){
            res.render("moviesGet",{peliculas:peliculas} )
        })
    },
    
    new:function(req,res){
        db.Movie.findAll({
            order:[
                ["release_date","DESC"]
            ],
            limit: 5
        })
        .then(function(peliculas){
            res.render("moviesNew",{peliculas:peliculas} )
        })
    },
    
    recommended:function(req,res){
        db.Movie.findAll({
            where:{
                awards:{[db.Sequelize.Op.gt]: 5}
            }
        })
        .then(function(peliculas){
            res.render("moviesRecommended",{peliculas:peliculas} )
        })
    },
    
    detail:function(req,res){
        db.Movie.findByPk(req.params.id,{
            include:[
                {association:"genre"},
                {association:"actors"}
            ],
            //raw:true,
            //nest: true,
        })
        .then(function(pelicula){
            res.render("moviesDetail",{pelicula:pelicula})
        })
    },
    
    edit:function(req,res){
        let pedidoPeli=db.Movie.findByPk(req.params.id);
        let pedidoGenre=db.Genre.findAll();

        Promise.all([pedidoPeli,pedidoGenre])
        .then(function([pelicula, generos]){
            res.render("moviesUpdate",{pelicula:pelicula, generos:generos})
        })
        .catch(function(error){
            console.log(error)
        });
    },
    update:function(req,res){
        db.Movie.update({
            title: req.body.title,
            awards:req.body.awards,
            revenue:req.body.revenue,
            release_date:req.body.release_date,
            length:req.body.length,
            genre_id:req.body.genre_id,
            },{
                where:{
                    id: req.params.id
                }
            })
            console.log(req.body.title)
        res.redirect("/movies/detail/"+req.params.id);
    },
    
    delete:function(req,res){
        db.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("/movies");  
    },
    search:function(req,res){
        db.Movie.findAll({
            where:{
               title:{[db.Sequelize.Op.like]:'%' + req.body.search + '%'}  
            },
            order:[
                ["title","DESC"]
        ],
            limit: 10,
        })
        .then(function(peliculas){
            if(!peliculas){
                res.render("moviesSearch",{errors:"No encontramos un título de pelicula con ese dato"})
            }else{
                res.render("moviesSearch",{peliculas:peliculas})
            }
        })
    },

};
module.exports = moviesController;