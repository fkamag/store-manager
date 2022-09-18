const connection = require('./connection');

const getAllProducts = async () => {
  console.log('a');
  console.log('b');
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  console.log('result');
  return result;
};

const findById = async (id) => {
  console.log('a');
  console.log('b');
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  console.log('result');
  return result;
};

const registerProduct = async (product) => {
  console.log('a');
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product.name],
  );
  return insertId;
};

const putById = async (id, productName) => {
  console.log('a');
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [productName, id],
  );
  return result;
};

const deleteById = async (id) => {
  console.log('a');
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  getAllProducts,
  findById,
  registerProduct,
  putById,
  deleteById,
};
