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

const createSales = async (itens) => {
  const insertId = await salesModel.createSales();
  await salesModel.insertProducts(insertId, itens);
  const json = { id: insertId, itemsSold: itens };
  return json;
};

const putById = async (id, itens) => {
  await salesModel.putById(id, itens);
  const json = { saleId: id, itemsUpdated: itens };
  return json;
};

module.exports = {
  getAllSales,
  findById,
  deleteById,
  createSales,
  putById,
};
