module.exports=(sequelize,dataTypes)=>{

        let alias="Movie";
        let cols={
            id:{
                type:dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title:{
                type:dataTypes.STRING,
                allowNull: false
            },
            length:{
                type:dataTypes.INTEGER
            },
            release_date:{
                type:dataTypes.DATE
            },
            director_id: {
                type:dataTypes.INTEGER
            },
            awards: {
                type:dataTypes.INTEGER
            },
            revenue:{
                type:dataTypes.STRING,
            },
            genre_id: {
                type:dataTypes.INTEGER
            }

        };
        let config={
                tableName:"movies",
                timestamps:false
        };

    const Movie= sequelize.define(alias, cols, config);

    Movie.associate=function(models){
        Movie.belongsTo(models.Genre, {
            as:"genre",
            foreignKey: "genre_id"
        });
        Movie.belongsToMany(models.Actor,{
            as:"actors",
            through:models.ActorMovie,
            foreignKey: "movie_id",
            // otherKey:"actor_id",
            timestamps:false,
            onDelete: 'CASCADE'
        });
    }
    return Movie;
};