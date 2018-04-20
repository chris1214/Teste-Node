/**
 * Created by christopher on 20/04/18.
 */

var input = document.querySelector('.filtro');

input.addEventListener('input', function () {
    var filtro = this.value;
    var pacientes = document.querySelectorAll('.paciente');

    for (var i = 0; i <= pacientes.length; i++){
        var paciente = pacientes[i];
        var nomeTD = paciente.querySelector('.info-nome');
        var nome = nomeTD.textContent;
        if (nome.includes(filtro)){
            paciente.classList.remove('none');
        }else{
            paciente.classList.add('none');
        }
    }
});
