// const fs = require('fs');
// const path = require('path');
// const productosData = path.join(__dirname,'../data/productsDataBase.json')
// const productos= JSON.parse(fs.readFileSync(productosData, 'utf-8'));


// const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

// let controller = {
// 	detail: function(req,res){
// 		let producto = productos.find(function(element){
// 			return element.id == req.params.id
// 		});
// 		res.render('detail',{
// 			title: 'Mercado Liebre /'+ producto.name,
// 			productos: producto,
// 			aMiles: toThousand
// 		}
// 		)
// 	}
// }



// module.exports =controller;