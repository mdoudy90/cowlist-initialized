const connection = require('../db/connection.js');

module.exports.insert = (name, description) => {
  connection.query(
    `INSERT INTO cows (name, description) VALUES (?, ?);`,
    [name, description],
    (error, data) => {
      if (error) {
        throw error;
      }
      console.log('SUCCESSFUL SQL INSERT');
    }
  );
};

module.exports.getAll = (callback) => {
  connection.query(`SELECT * FROM cows;`, (error, data) => {
    if (error) {
      throw error;
    }
    callback(data);
  });
};
