/**
 * Created by christopher on 17/04/18.
 */
var titulo = document.querySelector('h1');
titulo.textContent = "Aparecida Nutricionista";

function validaFormulario(peso, altura, error) {
    var myUl = document.querySelector('#mensagem-error');
    var myLi = document.createElement('li');
    myLi.classList.add('myErrorTR');
    var mensagem = {};

    if (peso <= 0 || peso >= 1000){
        mensagem = "Peso invalido";

        myLi.textContent = mensagem;
        myUl.appendChild(myLi);

        error.classList.add('myErrorTR');
    }
    if (altura <= 0 || altura >= 3.00) {
        mensagem = "Altura invalido";

        myLi.textContent = mensagem;
        myUl.appendChild(myLi);
        error.classList.add('myErrorTR');
    }
    return mensagem;
}
function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2)
}

