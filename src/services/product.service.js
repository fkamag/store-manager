const { productModel } = require('../models');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return { type: null, message: products };
};

const findById = async (id) => {
  const product = await productModel.findById(id);
  console.log('resultado =', product);
  if (!product) {
    console.log('product not found');
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  findById,
};
