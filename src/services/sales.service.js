const { salesModel } = require('../models');

const getAllSales = async () => {
  console.log('a');
  const sales = await salesModel.getAllSales();
  console.log(sales);
  return sales;
};

const findById = async (id) => {
  const sale = await salesModel.findById(id);
  if (sale.length === 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

const deleteById = async (id) => {
  const result = await salesModel.deleteById(id);
  return result;
};

module.exports = {
  getAllSales,
  findById,
  deleteById,
};
