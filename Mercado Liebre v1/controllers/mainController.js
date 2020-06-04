const fs = require('fs');
const path = require('path');

//funciones privadas que solo se pueden acceder desde este mismo archivo

function readHTML(__filename){
    let archivoHTML=fs.readFileSync(path.join(__dirname + "/../views/" + __filename + ".html"), "UTF-8");
    return archivoHTML;
}

//funciones publicas

let mainController = {
    index:function (req, res){
        let archivoHTML=readHTML("index");
        res.send(archivoHTML)
    }
}

module.exports = mainController;