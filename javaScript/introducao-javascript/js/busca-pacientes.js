/**
 * Created by christopher on 20/04/18.
 */
var busca = document.querySelector('#busca');

busca.addEventListener('click', function () {
   var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        var resposta = xhr.responseText;

        var respostaJson = JSON.parse(resposta);

        respostaJson.forEach(function (paciente) {
            fullCreate(paciente);
        });

    });
    xhr.send();
});
