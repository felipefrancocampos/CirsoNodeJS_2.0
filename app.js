var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render("home/index")
})

app.get('/formulario_inclusao_noticias', function(req, res){
    res.send("admin/form_add_noticias")
})

app.get('/noticias', function(req, res){
    res.send("noticias/noticias")
})

app.listen(3000, function(){
    console.log("Servidor rodando com Express ")
})