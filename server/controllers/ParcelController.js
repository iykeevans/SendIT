import parcelModel from '../models/ParcelModel';

class parcels {
  // get all parcel items
  static async getItems (req, res) {
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

  // get single parcel item
  static async getItem (req, res) {
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

  // add a parcel item
  static async addItem (req, res) {
    await parcelModel.insertParcel(req.body)
    .then(data => res.json(data))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
  };
  
  // change parcel item status
  static cancelItem (req, res) {
    const { id } = req.params;
    res.json(parcelModel.cancelParcel(id));
  };
}

export default parcels;
