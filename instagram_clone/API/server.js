var express = require('express'),
    bodyParser = require('body-parser'),
    multiparty = require('connect-multiparty'),
    mongodb = require('mongodb'),
    objectId = require('mongodb').ObjectId
    fs = require('fs');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(multiparty());

var porta = 8080;

app.listen(porta);

var db = new mongodb.Db(
    'instagram',
    new mongodb.Server('localhost', 27017, {}),
    {}
);

console.log('Servidor HTTP esta escutando a porta' + porta);

app.get('/', function(req, res){

    res.send({msg:'Olá'});
});

//POST (create)
app.post('/api', function(req, res){

    res.setHeader("Acess-Control_Allow_Origin", "*");

    var dados = req.body;

    res.send(dados);

    var path_origem = req.files.arquivo.path;
    var path_destino = './uploads/' + req.files.arquivo.originalFilename;

    fs.rename(path_origem, path_destino)

    /*
    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
           collection.insert(dados, function(err, records){
               if(err){
                    res.json({'status' : 'erro'});
               }else {
                   res.json({'status' : 'inclusao realizada com sucesso'});
               }
               mongoclient.close();
            });
        });
    });
    */

});


//GET (ready)
app.get('/api', function(req, res){
    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.find().toArray(function(err, results){
                if(err){
                    res.json(err);
                } else {
                    res.json(results);
                }
                mongoclient.close();
            });
        });
    });

});


//GET by ID (ready)
app.get('/api/:id', function(req, res){
    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.find(objectId(req.params.id)).toArray(function(err, results){
                if(err){
                    res.json(err);
                } else {
                    res.status(200).json(results);
                }
                mongoclient.close();
            });
        });
    });

});


//PUT by ID (update)
app.put('/api/:id', function(req, res){
    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.update(
                { _id : objectId(req.params.id) },
                { $set : { titulo : req.body.titulo }},
                {},
                function(err, records){
                    if(err){
                        res.json(err);
                    } else {
                        res.json(records);
                    }

                    mongoclient.close();
                }
            );
        });
    });
});


//DELETE by ID (remover)
app.delete('/api/:id', function(req, res){
    db.open( function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.remove({ _id : objectId(req.params.id)}, function(err, records){
                if(err){
                    res.json(err);
                } else {
                    res.json(records);
                }
                mongoclient.close();
            });
        });
    });
});