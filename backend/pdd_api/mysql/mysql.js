const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '249875',
    database: 'pdd'
});

connection.connect();

module.exports = connection;