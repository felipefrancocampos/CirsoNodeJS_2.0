var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');

var app = express();


app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

var porta = 8080;

app.listen(porta);

console.log('Servidor HTTP esta escutando a porta' + porta);

app.get('/', function(req, res){

    res.send({msg:'Olá'});
})