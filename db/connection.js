const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
})

connection.connect();

// SCHEMA SETUP
connection.query(`
  CREATE DATABASE IF NOT EXISTS cow_list;

  USE cow_list;

  CREATE TABLE IF NOT EXISTS
  cows (id INT(11) AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30),
        description VARCHAR(255));
`, (error, data) => {
  if (error) {
    throw error;
  }
});

module.exports = connection;