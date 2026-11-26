const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'alunolab',
    database: 'biblioteca',
    port: 3306,
    dateStrings: true
});

module.exports = conexao;
