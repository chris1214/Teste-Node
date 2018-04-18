/**
 * Created by christopher on 18/04/18.
 */
var table = document.querySelector('#tabela-pacientes');

table.addEventListener("dblclick", function (event) {
    var alvo = event.target;
    var pai = alvo.parentNode;

    pai.remove();
});