//import ids from 'short-id';

import db from '../database/db.json';
//import helper from '../helpers/helper';


const getAllParcels = () => {
  return new Promise((resolve, reject) => {
    if (db.length === 0) {
      reject({
        message: 'No data available',
        status: 404,
      });
    }
    resolve(db);
  });
};

export default { getAllParcels };
