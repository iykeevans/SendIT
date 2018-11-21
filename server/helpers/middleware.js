const checkFieldsPost = (req, res, next) => {
  const { pickupLocation, destination, itemName } = req.body;

  if (pickupLocation && destination && itemName) {
    next();
  } else {
    res.status(400).json({ message: 'fields are not correct' });
  }
};

export default { checkFieldsPost };
