const fs = require('fs');
var path = require('path');
const bcrypt = require('bcrypt');

// Lee el JSON de usuarios
const usersFilePath = path.join(__dirname, '../data/users.json');
const usuariosDB = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

// Guarda el json de usuarios
function saveJSONfile(usuariosDB) {
    fs.writeFileSync(usersFilePath, JSON.stringify(usuariosDB, null, ' '));
}

// Agrega un nuevo usuario
function addUser(nuevoUsuario) {
    usuariosDB.push(nuevoUsuario);
    saveJSONfile(usuariosDB);
}

// buscar usuario por mail
function searchByEmail(email){
    let user = null;
    usuariosDB.forEach((elem, i) => {
        if (elem["email"] == email) {
            user = elem;
        }
    });
    return user;
}

let usersController = {
    'archivo': path.join(__dirname) + "../data/users.json",
    'login': function(req,res){
        return res.render('login');
    },
    'login_post':function(req,res){
        let email= req.body.email;
        let password= req.body.password;
        let usuarioALoguearse = searchByEmail(email)
        if (usuarioALoguearse!=null && bcrypt.compareSync(password, usuarioALoguearse.password)){
            return res.render('profile', {usuario:usuarioALoguearse});
        } else{
            return res.render('login', {title: "El usuario o contraseña no existe."})
        }
    },
    'register': function(req,res){
        return res.render('register');
    },
    'register_post': function(req,res){
        let usuarioARegistrarse = searchByEmail(req.body.email);
        if (usuarioARegistrarse==null){
            let nuevoUsuario= {
                id: req.body.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename,
            };
            let mensaje = null;
            addUser(nuevoUsuario);
            mensaje = "¡El usuario se creó exitosamente!";
            return res.render('profile',{mensaje, usuario: nuevoUsuario});
        }
        else{
            return res.render('login', {title: "El email ya está registrado."})
        }
    },
    'profile': function(req,res){
        return res.render('profile', {usuario:usuariosDB});
    },
};

module.exports = usersController;