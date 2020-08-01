module.exports=(sequelize,dataTypes)=>{

    let alias="Actor";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type:dataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type:dataTypes.STRING,
            allowNull: false
        },
        rating:{
            type:dataTypes.INTEGER,
        },
        favorite_movie_id:{
            type:dataTypes.INTEGER,
        }

    };
    let config={
            tableName:"actors",
            timestamps:false
    };

const Actor= sequelize.define(alias, cols, config);

    Actor.associate=function(models){
        Actor.belongsToMany(models.Movie,{
            as:"movies",
            through: models.ActorMovie,
            foreignKey: "actor_id",
            //otherKey:"movie_id",
            timestamps:false,
            onDelete: 'CASCADE'
            });
    }
    return Actor;
};