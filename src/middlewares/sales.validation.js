const schemas = require('./schemas');

const salesValidation = async (req, res, next) => {
  const validation = await schemas.salesSchema.validate(req.body);
  if (validation.error) {
    const { error: { details: [{ message }] } } = validation;
    if (message === '"quantity" must be greater than or equal to 1') {
      res.status(422).json({ message });
    } else {
      res.status(400).json({ message });
    }
  } else {
    next();
  }
};

module.exports = salesValidation;