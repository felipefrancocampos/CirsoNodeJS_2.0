var http =  require('http')

var server = http.createServer(function(req, res){
    res.end("<html><body>Portal de nptícias</body></html>")
}) 

server.listen(3000)