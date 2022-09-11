const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(Number(id));
  console.log('message =', message);
  if (type) {
    console.log('status', message);
    return res.status(errorMap.mapError(type)).json(message);
  }
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  findById,
};
