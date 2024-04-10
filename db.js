const mysql = require('mysql');

const connection =  mysql.createConnection ({
    host: 'localhost',
    user:'root',
    password: '',
    database:'Apiarduino'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexion de la base de datos', err);
        return;
    }
    console.log('Conexion de la base de datos exitosa');
});
module.exports = connection;