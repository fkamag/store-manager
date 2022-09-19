const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity
    FROM StoreManager.sales_products as sp
    JOIN StoreManager.sales as s
    ON sp.sale_id = s.id`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id as productId, quantity
    FROM StoreManager.sales_products as sp
    JOIN StoreManager.sales as s
    ON sp.sale_id = s.id
    WHERE s.id = ?`, [id],
  );
  return result;
};

const deleteById = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?', [id],
  );
  return result;
};

const createSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  return insertId;
};

const insertProducts = async (insertId, itens) => {
  itens.map(async (item) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, item.productId, item.quantity],
    );
  });
  return insertId;
};

const putById = async (id, itens) => {
  itens.map(async (item) => {
    await connection.execute(
      'UPDATE StoreManager.sales_products SET quantity=? WHERE product_id=? AND sale_id = ?',
      [item.quantity, item.productId, id],
    );
  });
};

module.exports = {
  getAllSales,
  findById,
  deleteById,
  createSales,
  insertProducts,
  putById,
};
