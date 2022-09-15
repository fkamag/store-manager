const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

module.exports = {
  getAllSales,
};
