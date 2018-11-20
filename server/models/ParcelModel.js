//import ids from 'short-id';

import db from '../database/db.json';
import helper from '../helpers/helper';


const getAllParcels = () => new Promise((resolve, reject) => {
  if (db.length === 0) {
    reject(new Error('No data available'));
  }
  resolve(db);
});

const getOneParcel = id => new Promise((resolve, reject) => {
  // check if object with id exists
  helper.checkItemExist(db, id)
    .then(data => resolve(data))
    .catch(err => reject(err));
});

export default {
  getAllParcels,
  getOneParcel,
};
