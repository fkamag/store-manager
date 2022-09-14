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

const registerProduct = async (product) => {
  const insertId = await productModel.registerProduct(product);
  return { id: insertId, name: product.name };
};

module.exports = {
  getAllProducts,
  findById,
  registerProduct,
};
