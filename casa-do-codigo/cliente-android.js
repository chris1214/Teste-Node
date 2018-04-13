/**
 * Created by christopher on 12/04/18.
 */
var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 8081,
    path: '/produtos',
    headers: {
        'Accept':'application/json'
    }
};
http.get(configuracoes, function (res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo:'+ body);
    });
})