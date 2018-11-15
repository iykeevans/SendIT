const parcelModel = require('../models/parcels.model');

let parcels = {};

parcels.getItems = async (req, res) => {
  await parcelModel.getAllParcels()
  .then(data => res.json(data))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: err.message });
    }
  });
};

parcels.getItem = async (req, res) => {
  const { id } = req.params;
  await parcelModel.getOneParcel(id)
  .then(data => res.json(data))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: err.message });
    }
  });
};

parcels.addItem = (req, res) => {
  res.json(parcelModel.insertParcel(req.body));
};

parcels.cancelItem = (req, res) => {
  const { id } = req.params;
  res.json(parcelModel.cancelParcel(id));
};

module.exports = parcels
