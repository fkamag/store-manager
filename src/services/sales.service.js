const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

const findById = async (id) => {
  const sale = await salesModel.findById(id);
  console.log(sale);
  if (sale.length === 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

module.exports = {
  getAllSales,
  findById,
};
