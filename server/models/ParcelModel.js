import ids from 'shortid';

import db from '../database/db.json';
import helper from '../helpers/helper';


const getAllParcels = () => new Promise((resolve, reject) => {
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
}

export default {
  getAllParcels,
  getOneParcel,
  insertParcel,
};
