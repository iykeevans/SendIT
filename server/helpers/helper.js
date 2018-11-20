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

export default { checkItemExist };