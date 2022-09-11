const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/:id', productController.findById);

module.exports = router;
