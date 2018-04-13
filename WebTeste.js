/**
 * Created by christopher on 02/04/18.
 */
var http = require('http');
var server = http.createServer(function (request, response){
    if (request.url == "/produtos"){
        response.end("<html><body><h1>New Listem server</h1></body></html>");
    } else {
        response.end("<html><body><h1>Server else listem</h1></body></html>");
    }

});
server.listen(8080);

console.log('Servidor ta rodando');