var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123Fatec',
        database : 'casadocodigo_nodejs'
    });
}

// isso é um wrapper!
module.exports = function(){
    return createDBConnection;
}