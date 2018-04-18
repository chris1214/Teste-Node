/**
 * Created by christopher on 18/04/18.
 */
var paciente = document.querySelectorAll('.paciente');

function selectTR(tr) {
    var myTR = tr;
    var tdPeso = myTR.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = myTR.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var tdImc = myTR.querySelector('.info-imc');

    var imc = calculaIMC(peso, altura);

    tdImc.textContent = imc; 
    validaFormulario(peso, altura,myTR);
}

for (var i = 0; i <= paciente.length; i++){
    var myTR = paciente[i];
    selectTR(myTR);
}
