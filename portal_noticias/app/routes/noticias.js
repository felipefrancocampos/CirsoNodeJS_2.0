module.exports = function(application) {

    application.get('/noticias', function(req, res){
        application.app.conttrolers.noticias.noticias(application, req, res)
    
    })

    application.get('/noticia', function(req, res){
        application.app.conttrolers.noticias.noticia(application, req, res)
    }) 
}