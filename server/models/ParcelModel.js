import db from '../database/db';

const getAllParcels = () => new Promise((resolve, reject) => {
  db.query('SELECT * FROM parcels ORDER BY id ASC', (error, results) => {
    if (error) {
      reject(error);
    }
    resolve(results.rows);
  });
});

const getOneParcel = id => new Promise((resolve, reject) => {
  db.query('SELECT * FROM parcels WHERE id = $1', [id], (error, results) => {
    if (error) {
      reject(error);
    }
    resolve(results.rows[0]);
  });
});

const insertParcel = newParcel => new Promise((resolve, reject) => {
  const { itemName, pickupLocation, destination } = newParcel;
  db.query(
    'INSERT INTO parcels (item_name, pickup_location, destination) VALUES ($1, $2, $3)',
    [itemName, pickupLocation, destination],
    (error, results) => {
      if (error) {
        reject(error);
      }
      resolve('added ID');
    },
  );
});

const cancelParcel = id => new Promise((resolve, reject) => {
  db.query(
    'UPDATE users SET status = $1 WHERE id = $2',
    ['processing', id],
    (error) => {
      if (error) {
        reject(error);
      }
      resolve(`User modified with ID: ${id}`);
    },
  );
});


export default {
  getAllParcels,
  getOneParcel,
  insertParcel,
  cancelParcel,
};
