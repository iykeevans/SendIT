import { writeFileSync } from 'fs';

const getNewId = (array) => {
  if (array.length > 0) {
    return array[length - 1].id + 1;
  }
  return 1;
}

const getNewUserId = () => {
  if (array.length > 0) {
    return array[array.length - 1].userId + 2;
  }
  return 1;
}

// check if object with id exists
const checkItemExist = (database, id) => {
  return new Promise((resolve, reject) => {
    const row = database.find(rowItem => rowItem.id == id);
    if(!row) {
      reject({
        status: 404,
        message: 'ID is not valid'
      });
    }
    resolve(row);
  });
}

const checkUserExist = (database, id) => {
  return new Promise((resolve, reject) => {
    const row = database.find(r => r.userId == id);
    if(!row) {
      reject({
        status: 404,
        message: 'ID is not valid'
      });
    }
    resolve(row);
  });
}

const newDate = () => new Date().toString();

const newPrice = () => Math.floor(Math.random() * 1000);

const writeJSONFile = (filepath, content) => {
  writeFileSync(filepath, JSON.stringify(content), 'utf8');
}

export default { getNewId, getNewUserId, checkItemExist, checkUserExist, newDate, newPrice, writeJSONFile };
