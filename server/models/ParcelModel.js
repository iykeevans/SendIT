import ids from 'shortid';

import { pool } from '../database/db.js';
import helper from '../helpers/helper';


const getAllParcels = () => new Promise((resolve, reject) => {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  });
  if (db.length === 0) {
    reject('No data available');
  }
  resolve(db);
});

const getOneParcel = id => new Promise((resolve, reject) => {
  // check if object with id exists
  helper.checkItemExist(db, id)
    .then(data => resolve(data))
    .catch(err => reject(err));
});

const insertParcel = (newParcel) => {
  return new Promise((resolve) => {
    const parcel = newParcel;
    parcel.id = ids.generate();
    parcel.userId = ids.generate();
    parcel.status = true;
    parcel.createdAt = helper.newDate();
    db.push(newParcel);
    resolve(newParcel);
  });
};

const cancelParcel = (id) => {
  return new Promise((resolve, reject) => {
    const parcel = db.find(item => item.id === id);
    if (parcel.status === true) {
      resolve(parcel.status = false);
    }
    reject(new Error('already cancelled'));
  });
}

export default {
  getAllParcels,
  getOneParcel,
  insertParcel,
  cancelParcel,
};
