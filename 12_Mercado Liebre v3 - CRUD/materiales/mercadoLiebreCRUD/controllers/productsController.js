const fs = require('fs');
const path = require('path');

// Lee el archivo Json en la constante "productosDB"
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productosDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// Guardar en el archivo json 
function saveJSONfile(nuevaListaProductos) {
	fs.writeFileSync(productsFilePath, JSON.stringify(nuevaListaProductos, null, ' '));
};

// Busqueda por id de producto (si sin != continua nulo)
function findId(id){
	let productFind= null;
	productosDB.forEach((prod, i) => {
		if (prod["id"] == id) {
			productFind= prod;
		}
	});
	return productFind;
}

// Agrega un nuevo producto a la lista de productosDB
function addProduct(productoNuevo) {
	productosDB.push(productoNuevo);
	saveJSONfile(productosDB);
};


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
	// Se deberán listar todos los productosDB presentes en el base de datos json.
	products: (req, res) => {
		res.render('products', {productosDB, toThousand});
	},
	// Detail - Detail from one product
	detail:(req, res) => {
		//por get mostrar cada producto, 2 botones en la vista:borrar y modificar
		let productFind = findId(req.params.id);
		let precioNeto = productFind.price * (1 - (productFind.discount / 100));
		return res.render('detail', {productFind,precioNeto,toThousand});
	},
	
	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')// Formulario de creacion
	},
	
	// Create -  Method to store
	store: (req, res) => {
		//envio de datos por POST
		let productoNuevo = { 
			id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.body.image
		};
		let productFind = findId(productoNuevo.id);
		if(productFind == null) {
			addProduct(productoNuevo);

			let mensaje = "El producto se agregó correctamente.";
			return res.render("products",{mensaje, productosDB, toThousand, status: "success"});
		}else{
			let mensaje = "Error: el producto ya existe, no se puede agregar."
			return res.render("products",{mensaje, productosDB, toThousand, status: "error"});
		}
	},
	
	// Update - Form to edit
	edit: (req, res) => {
		// modificar - GET
		let productFind = findId(req.params.id)
		if(productFind != null){
			return res.render('product-edit-form',{productFind, toThousand});
		}else{
			return res.send("No encontramos el producto que desea editar.");
		};
	},
	// Update - Method to update
	update: (req, res) => {
		// modificar -PUT
		let productFind = findId(req.body.id);
		let mensaje = null;
		if(productFind != null){
			if(req.body.name.trim() !== ""){  //trim elimina espacios en blanco
				productFind.name = req.body.name; //modificó el nombre del producto
				productosDB.map((prod) => {
					if (prod.id == productFind.id) {
						prod.name = productFind.name;
						prod.price= productFind.price,
						prod.discount= productFind.discount,
						prod.category= productFind.category,
						prod.description= productFind.description,
						prod.image= productFind.image
					}
				});
				saveJSONfile(productosDB);
				mensaje = "El producto se editó correctamente.";
				console.log(mensaje)
				return res.render("products",{mensaje, productosDB, toThousand, status: "success"});
			} else {
				mensaje = "Error al intentar modificar el producto."
				return res.render('product-edit-form',{mensaje, productosDB, toThousand, status: "error"});
			}
		 }else{
		 	return res.send("No encontramos el producto que desea editar.");
		};
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// boton borrar - Viajará por DELETE
		let productFind = findId(req.body.id);
		let nuevoArrayProductos = [];
		nuevoArrayProductos = productosDB.filter(prod => prod.id != productFind.id);
		console.log(nuevoArrayProductos);
		saveJSONfile(nuevoArrayProductos);
		let mensaje = "EL producto se eliminó con éxito de la lista.";
		return res.render("products",{mensaje, productosDB, toThousand, status: "success"});
	}
};

module.exports = controller;