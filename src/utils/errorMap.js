const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  SALES_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
