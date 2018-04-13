module.exports = function(app) {
    app.get("/Livraria",function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results){
            res.render('Livraria/lista', {lista: results});
        });
        connection.end();
    });
    app.post("/Livraria", function (req, res) {
        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(produto,function (err, results) {
            res.render('Livraria/lista');

        });
        connection.end();
    });
}