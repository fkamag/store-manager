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
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  return res.status(200).json(message);
};

const registerProduct = async (req, res) => {
  const product = req.body;
  const json = await productService.registerProduct(product);
  console.log(json);
  return res.status(201).json(json);
};

module.exports = {
  getAllProducts,
  findById,
  registerProduct,
};
