const { productModel } = require('../models');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return { type: null, message: products };
};

const findById = async (id) => {
  const product = await productModel.findById(id);
  if (!product) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  findById,
};
