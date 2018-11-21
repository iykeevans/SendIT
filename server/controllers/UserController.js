import userParcels from '../models/UserModel';

class users {
  static getItems(req, res) {
    const { id } = req.params;
    userParcels.getUserParcels(id)
      .then(data => res.json(data))
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
      });
  }
}

export default users;
