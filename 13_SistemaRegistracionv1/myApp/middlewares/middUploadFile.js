const multer = require('multer'); // file uploads
const path = require('path');

// Start File uploads config ---------------------------------------------------------
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'public/images/users')
  },
  filename: function (req, file, cb) {
    let fechaActual = new Date();
    cb(null, req.body.nombre + ' - ' + req.body.id + fechaActual.getFullYear() + "-" + path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    ext = ext.toLowerCase(); //para convertir a minuscula extension de image en mayuscula

    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return callback(new Error('El avatar sólo puede ser imagen JPG, PNG, JPEG.'))
      }
    callback(null, true)
  }
}).single('avatar');


// End File uploads config ---------------------------------------------------------


let middUploadFile = {
  uploadFile: function (req,res,next) {
    upload(req, res, function(err){
      if(err) {
        return res.render("register", {errors: err});
      } else {
        next();
      };
    });
  }
}

module.exports = middUploadFile;
