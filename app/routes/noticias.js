module.exports = function(app) {
app.get('/noticias', function(req, res){
    res.send("noticias/noticias")
})
}