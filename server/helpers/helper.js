// check if object with id exists
const checkItemExist = (database, id) => {
  return new Promise((resolve, reject) => {
    const row = database.find(rowItem => rowItem.id === Number(id));
    if (!row) {
      reject(new Error('ID is not valid'));
    }
    resolve(row);
  });
};

const checkUserExist = (database, id) => {
  return new Promise((resolve, reject) => {
    const row = database.find(r => r.userId === Number(id));
    if (!row) {
      reject(new Error('ID is not valid'));
    }
    resolve(row);
  });
};

const newDate = () => new Date().toString();

const newPrice = () => Math.floor(Math.random() * 1000);

export default {
  checkItemExist,
  checkUserExist,
  newDate,
  newPrice,
};
