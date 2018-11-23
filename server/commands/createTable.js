const log = require('fancy-log');
const pool = require('../database/db');

pool.on('connect', () => {
  log.info('connected to the db');
});

/**
 * Create User Tables
 */
const createUserTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW,
        modified_at TIMESTAMP DEFAULT NOW
      )`;

  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.info(err);
      pool.end();
    });
};

/**
 * Create Parcel Tables
 */
const createParcelTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      parcels(
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
        item_name VARCHAR(255) NOT NULL,
        pickup_location TEXT NOT NULL,
        destination TEXT NOT NULL,
        receivers_name TEXT,
        receivers_no TEXT,
        status TEXT DEFAULT 'processing',
        created_at TIMESTAMP DEFAULT NOW,
        modified_at TIMESTAMP DEFAULT NOW
      )`;

  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.info(err);
      pool.end();
    });
};

/**
 * Drop User Tables
 */
const dropUserTables = () => {
  const queryText = 'DROP TABLE IF EXISTS users';
  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.info(err);
      pool.end();
    });
};

/**
 * Drop Parcel Tables
 */
const dropParcelTables = () => {
  const queryText = 'DROP TABLE IF EXISTS parcels';
  pool.query(queryText)
    .then((res) => {
      log.info(res);
      pool.end();
    })
    .catch((err) => {
      log.info(err);
      pool.end();
    });
};

pool.on('remove', () => {
  log.info('client removed');
  process.exit(0);
});

module.exports = {
  createUserTables,
  createParcelTables,
  dropUserTables,
  dropParcelTables,
};

require('make-runnable');
