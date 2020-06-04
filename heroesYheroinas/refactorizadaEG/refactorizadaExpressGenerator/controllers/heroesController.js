const fs = require("fs");

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('/home/emiliana/digitalHouse/FullStackNodeNodeJS/Express/REFACTORIZADA-M03C06HEROES/practicaExpressGenerator/heroes/data/heroes.json', 'utf-8'));

const heroesControlador ={
heroesTodos:(req,res)=>{
    res.send(heroes);
},
detalleId:(req,res)=>{
    const heroe = heroes.find(h=>h.id == req.params.id);
		if(heroe){
			res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
		 } else {
			res.send("No se encontró a ese héroe");
        };
    },
bioId:(req,res)=>{
    let heroe = heroes.find(h=>h.id == req.params.id);
	if(!heroe){ // Si NO se encuentra al héroe se envía un mensaje
		res.send("No encontramos un héroe para mostrarte su biografía");
	 } else { 	// Si se encuentra al héroe: Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		if(req.params.ok != undefined
			&&req.params.ok == "ok"){
			res.send(`${heroe.nombre}: ${heroe.resenia}`);
		    } else{// Si nó vino el parámetro se envía el mensaje de error
		    res.send( `${heroe.nombre}:Lamento que no desees saber más de mi :(`);
		        } ;
		    }
    }
};

module.exports=heroesControlador;
