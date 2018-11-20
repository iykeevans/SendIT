import db from '../database/db.js';
import helper from '../helpers/helper';

const getUserParcels = (id) => {
  return new Promise((resolve, reject) => {
    // check if object with id exists
    helper.checkUserExist(db, id)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export default { getUserParcels };
