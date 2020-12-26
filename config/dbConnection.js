var mysql = require('mysql')

module.exports = function() {
    return mysql.createConnection({
        host : 'localhost', 
        user : 'root',
        pasword : 'Felps542543',
        database : 'portal_noticias'
    })
} 