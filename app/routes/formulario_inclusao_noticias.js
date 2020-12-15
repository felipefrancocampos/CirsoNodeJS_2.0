module.exports = function(app){

app.get('/formulario_inclusao_noticias', function(req, res){
    res.send("admin/form_add_noticias")
})
}