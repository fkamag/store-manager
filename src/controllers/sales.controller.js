const { salesService } = require('../services');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  return res.status(200).json(result);
};

module.exports = {
  getAllSales,
};
