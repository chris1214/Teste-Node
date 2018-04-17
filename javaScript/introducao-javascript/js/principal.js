/**
 * Created by christopher on 17/04/18.
 */
var titulo = document.querySelector('h1');
titulo.textContent = "Aparecida Nutricionista";

function selectTR(id, linha) {
    var tr = id;
    var tdPeso = tr.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = tr.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var resultado = peso / (altura * altura);
    var tdImc = tr.querySelector('.info-imc');

    if (peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso invalido";
        tr.classList.add('myErrorTR');
    } else if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura invalido";
        tr.classList.add('myErrorTR');
    } else {
        return tdImc.textContent = resultado.toFixed(2);
    }
}

var paciente = document.querySelectorAll('.paciente');
for (var i = 0; i <= paciente.length; i++){
    var linha = i + 1;
    selectTR(paciente[i], linha);

}

function create(value) {
    document.createElement(value)
}
var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Oi eu sou um botao");
    /*var form = document.querySelector("#form");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tr = create('tr');

    var nomeTD = create('td');
    var pesoTD = create('td');
    var alturaTD = create('td');
    var gorduraTD = create('td');

    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;

    tr.appendChild(nomeTD,pesoTD,alturaTD,gorduraTD);

    console.log(tr);*/
});
