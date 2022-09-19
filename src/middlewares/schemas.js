const Joi = require('joi');

const salesSchema = Joi.array().items({
  productId: Joi.number().required().messages({
    'any.required': '"productId" is required',
  }),
  quantity: Joi.number().min(1).required().messages({
    'any.required': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
  }),
}).min(1);

module.exports = {
  salesSchema,
};