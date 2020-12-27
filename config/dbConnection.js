var mysql = require('mysql')

var connMySQL = function(){
    console.log('Conexao com o banco de dados foi estabelecida')
    return mysql.createConnection({
        host : 'localhost', 
        user : 'root',
        pasword : 'Felps542543',
        database : 'portal_noticias'
    })
}
module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com bd')
    return connMySQL
}