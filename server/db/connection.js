const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password: '',
})

connection.connect();

connection.end();

module.exports = connection;