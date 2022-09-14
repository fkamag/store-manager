const nameValidation = (req, res, next) => {
  const { name } = req.body;
  const minCharacters = 5;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < minCharacters) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

module.exports = nameValidation;