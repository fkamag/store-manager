const { salesService, productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  return res.status(200).json(result);
};

const findById = async (_req, res) => {
  const { id } = _req.params;
  const { type, message } = await salesService.findById(id);
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  return res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  await salesService.deleteById(id);
  return res.status(204).end();
};

const createSales = async (req, res) => {
  const itens = req.body;
  console.log(itens);
  const resp = await Promise.all(itens.map(async (item) => (
    productService.findById(item.productId)
  )));
  const result = resp.find((item) => item.type !== null);
  if (result) {
    const status = errorMap.mapError(result.type);
    return res.status(status).json({ message: result.message });
  }
  const json = await salesService.createSales(itens);
  return res.status(201).json(json);
};

const putById = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const { type, message } = await salesService.findById(id);
  if (type) {
    const status = errorMap.mapError(type);
    return res.status(status).json({ message });
  }
  const updated = { ...req.body };
  await salesService.putById(id, product);
  return res.status(200).json({ id, itemsUpdated: updated });
};

module.exports = {
  getAllSales,
  findById,
  deleteById,
  createSales,
  putById,
};
