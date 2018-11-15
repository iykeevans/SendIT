import userParcels from '../models/UserModel';

class users {
  static async getItems (req, res) {
    const { id } = req.params;
    await userParcels.getUserParcels(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
  };
};

export default users;
