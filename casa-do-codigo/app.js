/**
 * Created by christopher on 02/04/18.
 */
var app = require('./config/express')();

app.listen(8081,function(){
    console.log("Servidor rodando");
});