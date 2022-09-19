const express = require('express');
const { salesController } = require('../controllers');
const salesValidation = require('../middlewares/sales.validation');

const router = express.Router();

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.findById);

router.delete('/:id', salesController.deleteById);

router.post('/', salesValidation, salesController.createSales);

router.put('/:id', salesValidation, salesController.putById);

module.exports = router;
