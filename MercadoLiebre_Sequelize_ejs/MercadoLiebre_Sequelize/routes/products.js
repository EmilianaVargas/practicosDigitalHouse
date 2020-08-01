const express = require('express');
const router = express.Router();


const productsController = require('../controllers/productsController');

router.get('/', productsController.findAll); /* GET - All products */
router.get('/detail/:id', productsController.detail); /* GET - Product detail */


router.get('/create', productsController.create); /* GET - Form to create */
router.post('/create', productsController.store); /* POST - Store in DB */


router.get('/edit/:id', productsController.edit); /* GET - Form to create */
router.put('/edit/:id', productsController.update); /* PUT - Update in DB */


router.delete('/delete/:id', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;
