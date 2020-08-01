const db = require('../database/models');
const Movie = require('../database/models/Movie');
let sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const {check, validationResult, body} = require('express-validator');




let moviesController = {
    movies:function(req,res){
        db.Movie.findAll()
        .then(function(peliculas){
            res.render("moviesGet",{peliculas:peliculas} )
        })
    },
    createGet:function(req,res){
            db.Genre.findAll()
            .then(function(generos){
                res.render("moviesCreate",{generos:generos} )
            })
    },
    create:function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.Movie.create({
                title: req.body.title,
                awards:req.body.awards,
                revenue:req.body.revenue,
                release_date:req.body.release_date,
                length:req.body.length,
                genre_id:req.body.genre_id,
                })
                .then(function(pelicula){
                    res.redirect("/movies")
                    console.log(pelicula.id)

                })
            }else{
                db.Genre.findAll()
                    .then(function(generos){
                     res.render("moviesCreate",{errors: errors.errors, generos:generos})
                    })    
            }
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
        res.redirect("/movies");
    },
    
    delete:function(req,res){
        db.ActorMovie.destroy({
            where:{
                movie_id: req.params.id
            }
        })
        .then(function(){
            db.Movie.destroy({
                where:{
                    id: req.params.id
                }
            }).then(function(){
                res.redirect("/movies");
            }).catch(function(error){
                console.log(error)
            });

        })
        .catch(function(error){
            console.log(error)
        })
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
                console.log(peliculas);
                res.render("moviesSearch",{errors:"No encontramos un título de pelicula con ese dato"})
            }else{
                res.render("moviesSearch",{peliculas:peliculas})
            }
            
        })
    },
    genreDetail:function(req,res){
        db.Genre.findByPk(req.params.id,{
            include:[
                {association:"movies"},
            ],
        })
        .then(function(genre){
            res.render("genreDetail",{genre:genre} )
        })
    },
    actorDetail:function(req,res){
        db.Actor.findByPk(req.params.id,{
            include:[
                {association:"movies"},
                
            ],
        })
        .then(function(actor){
            res.render("actorDetail",{actor:actor} )
        })
    },
    actorMovie: async (req,res)=> {
        let peliculas = await db.Movie.findAll();
        let actores = await db.Actor.findAll();
        return res.render("actorMovie",{peliculas, actores});
    },
    actorNewMovie:function(req,res){
        db.ActorMovie.create({
            actor_id: req.body.actor_id,
            movie_id:req.body.movie_id,
            })
            .then(function(rowActorMovie){
                res.redirect("/movies")
                console.log(rowActorMovie)
            })
    },

};
module.exports = moviesController;