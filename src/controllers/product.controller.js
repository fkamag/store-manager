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
  return res.status(201).json(json);
};

const putById = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const { type, message } = await productService.findById(Number(id));
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  const updated = { id, ...req.body };
  await productService.putById(id, product);
  return res.status(200).json(updated);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(Number(id));
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  await productService.deleteById(id);
  return res.status(204).end();
};

const searchProducts = async (req, res) => {
  const { q } = req.query;
  const { message } = await productService.getAllProducts();
  const result = message.filter((item) => item.name.includes(q));
  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  findById,
  registerProduct,
  putById,
  deleteById,
  searchProducts,
};
