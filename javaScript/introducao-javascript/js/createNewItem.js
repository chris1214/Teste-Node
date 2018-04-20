/**
 * Created by christopher on 18/04/18.
 */
function myForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };
    return paciente;
}

function createTr() {
    var newTR = {
        tr: document.createElement('tr'),
        nomeTD: document.createElement('td'),
        pesoTD: document.createElement('td'),
        alturaTD: document.createElement('td'),
        gorduraTD: document.createElement('td'),
        imcTD: document.createElement('td')
    };
    return newTR;
}

function addElementInTR(myTR, myPacietes) {
    var table = document.querySelector("#tabela-pacientes");

    myTR.nomeTD.textContent = myPacietes.nome;
    myTR.pesoTD.textContent = myPacietes.peso;
    myTR.alturaTD.textContent = myPacietes.altura;
    myTR.gorduraTD.textContent = myPacietes.gordura;
    myTR.imcTD.textContent = myPacietes.imc;

    myTR.tr.appendChild(myTR.nomeTD);
    myTR.tr.appendChild(myTR.pesoTD);
    myTR.tr.appendChild(myTR.alturaTD);
    myTR.tr.appendChild(myTR.gorduraTD);
    myTR.tr.appendChild(myTR.imcTD);

    myTR.tr.classList.add('paciente');
    myTR.nomeTD.classList.add('info-nome');
    myTR.pesoTD.classList.add('info-peso');
    myTR.alturaTD.classList.add('info-altura');
    myTR.gorduraTD.classList.add('info-gordura');
    myTR.imcTD.classList.add('info-imc');

    return table.appendChild(myTR.tr);
}

function add(){
    var form = document.querySelector("#form");

    var myPacietes = myForm(form);

    fullCreate(myPacietes);
}
function fullCreate(pacientes) {
    var myTR = createTr();

    var peso = pacientes.peso;
    var altura = pacientes.altura;
    var error = myTR.tr;
    var mesagem = validaFormulario(peso, altura, error);
    if (!mesagem.length > 0){
        addElementInTR(myTR, pacientes);
    }

    form.reset();
}
var botao = document.querySelector('#adicionar-paciente');
botao.onclick = add;