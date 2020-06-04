const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Se deberán mostrar los productos separados en dos secciones. Los últimos visitados y los productos en oferta
	index: (req, res) => {
		res.render('index', {
			productosAMostrar: productos,
			toThousand: toThousand
		});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
