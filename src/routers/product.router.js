const express = require('express');
const { productController } = require('../controllers');
const nameValidation = require('../middlewares/name.validation');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/search', productController.searchProducts);

router.get('/:id', productController.findById);

router.post('/', nameValidation, productController.registerProduct);

router.put('/:id', nameValidation, productController.putById);

router.delete('/:id', productController.deleteById);

module.exports = router;
