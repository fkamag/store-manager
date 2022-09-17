const { salesService } = require('../services');
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

module.exports = {
  getAllSales,
  findById,
  deleteById,
};
