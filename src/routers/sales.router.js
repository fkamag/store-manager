const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.findById);

router.delete('/:id', salesController.deleteById);

module.exports = router;
