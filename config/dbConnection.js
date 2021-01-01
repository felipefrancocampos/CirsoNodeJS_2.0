var mysql = require('mysql')

var connMySQL = function(){
    return mysql.createConnection({
        host : 'localhost', 
        user : 'root',
        pasword : 'Felps542543',
        database : 'portal_noticias'
    })
}
module.exports = function() {
    return connMySQL
}