const fs = require('fs');
const path = require('path');
const db = require("../database/models");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const formatPrice = (price,discount) => toThousand(Math.round(price*(1-(discount/100))));

const controller = {
	findAll: (req, res) => {
		db.Product.findAll()
			.then((products) => {
				res.render("products", {products, toThousand, formatPrice});
			});
	},
	detail: (req,res) => {
		db.Product.findByPk(req.params.id)
			.then((product) => {
				return res.render("detail", {product, toThousand, formatPrice});
			});
    },
	create: (req, res) => {
		return res.render("product-create-form");
	},
	store: (req, res) => {
			db.Product.create({
				name: req.body.name,
				price: parseFloat(req.body.price),
				discount: parseFloat(req.body.discount),
				category: req.body.category,
				description: req.body.description,
				image: "img-aire-acondicionado.jpg"
            })
            .then((newProduct) => {
                if (!newProduct) {
					res.render("product-create-form", { error:"Error al crear el producto" });
                } else {
					message = "¡El producto se creó exitosamente!";
					return res.render("detail", {product: newProduct, toThousand, formatPrice, message});
                }
            })
            .catch(function(err){
				console.log(err);
			})
	},
	edit: (req, res) => {
		db.Product.findByPk(req.params.id)
        .then((product) => {
            if (product) {
                return res.render("product-edit-form", {productToEdit: product});
            }else{
				db.Product.findAll()
					.then((products) => {
						res.render("products", {products, toThousand, formatPrice, error: "No se encontró el producto"});
					});
            }
        })
	},
	update: (req, res) => {
		let productToEdit= req.params.id;

		db.Product.update({
			name : req.body.name,
			price : parseFloat(req.body.price),
			discount : parseFloat(req.body.discount),
			category : req.body.category,
			description : req.body.description,
		}, {
			where:{
				id: productToEdit
			}
		})
		.then((rowUpdated) => {
			if (!rowUpdated) {
				db.Product.findByPk(productToEdit)
        			.then((product) => {
						return res.render("product-edit-form", {productToEdit: product});
					})
			} else {
				db.Product.findByPk(productToEdit)
				.then((productUpdated)=>{
					return res.render("detail", {product:productUpdated, toThousand, formatPrice});
				})
			}
		})
		.catch(function(err){
			console.log(err);
		})
	},
	destroy : (req, res) => {
		db.Product.destroy({
			where:{
				id: req.params.id
			}
		}).then((product) => {
			db.Product.findAll()
			.then((products) => {
				res.render("products", {products, toThousand, formatPrice});
			});
		})
	}
};

module.exports = controller;