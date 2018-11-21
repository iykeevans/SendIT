import ParcelModel from '../models/ParcelModel';

class Parcels {
  // gets all parcel items
  static getItems(req, res) {
    ParcelModel.getAllParcels()
      .then(data => res.status(200).json(data))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
      });
  }

  // gets one parcel item
  static getItem(req, res) {
    const { id } = req.params;
    ParcelModel.getOneParcel(id)
      .then(data => res.status(200).json(data))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
      });
  }

  // add a parcel item
  static addItem(req, res) {
    ParcelModel.insertParcel(req.body)
      .then(data => res.status(201).json(data))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        } else {
          res.status(500).json({ message: err.message });
        }
      });
  }
}

module.exports = Parcels;
