import db from '../database/database.json';
import helper from '../helpers/helper';
import ids from 'short-id';

const getAllParcels = () => {
  return new Promise((resolve, reject) => {
    if(db.length === 0) {
      reject({
        message: 'No data available',
        status: 202
      })
    }
    resolve(db);
  });
}

const getOneParcel = (id) => {
  return new Promise((resolve, reject) => {
    // check if object with id exists
    helper.checkItemExist(db, id)
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}

const insertParcel = (newParcel) => {
  return new Promise((resolve, reject) => {
    newParcel.id = ids.generate();
    newParcel.userId = ids.generate();
    newParcel.price = helper.newPrice();
    newParcel.status = true;
    newParcel.createdAt = helper.newDate();
    db.push(newParcel);
    resolve(newParcel);
  });
}

const cancelParcel = (id) => {
  let parcel = db.find(item => {
    return item.id == id;
  });
  if(parcel.status === true) {
    parcel.status = false
  } else {
    return {message: 'order is already cancelled'}
  }
  return parcel
}

export default { getAllParcels, getOneParcel, insertParcel, cancelParcel }
