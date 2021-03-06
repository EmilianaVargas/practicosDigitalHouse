const fs = require('fs');
const path = require('path');
const db = require("../database/models");

//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price,discount) => toThousand(Math.round(price*(1-(discount/100))));

const controller = {
	root: (req, res) => {
		db.Product.findAll()
			.then((products) => {
				res.render("index", {products,  formatPrice});
			});
	},
	search: (req, res) => {
		const results = [];
		db.Product.findAll()
			.then((products) => {
				products.forEach(product => {
					if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase().trim()) || product.description.toLowerCase().includes(req.query.keywords.toLowerCase().trim())){
						results.push(product);
						}
					res.render("results", {results, toThousand, formatPrice, search: req.query.keywords});
			});
		});
	},
	offers: (req,res) => {
		db.Product.findAll({ where:{category:"in-sale"}	})
		.then((inOffer) => {
			res.render("offers", {products: inOffer, toThousand, formatPrice});
		})
	},
};

module.exports = controller;
