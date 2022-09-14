const express = require('express');
const { productController } = require('../controllers');
const nameValidation = require('../middlewares/name.validation');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/:id', productController.findById);

router.post('/', nameValidation, productController.registerProduct);

module.exports = router;
