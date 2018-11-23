import db from '../database/db';

const getUserParcels = id => new Promise((resolve, reject) => {
  db.query('SELECT * FROM parcels WHERE id = $1', [id], (error, results) => {
    if (error) {
      reject(error);
    }
    resolve(results.rows);
  });
});

export default { getUserParcels };
