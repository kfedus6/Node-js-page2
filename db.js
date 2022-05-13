const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: '127.0.0.1',
   post: '3306',
   user: 'root',
   password: '',
   database: 'blog'
})

module.exports = connection;