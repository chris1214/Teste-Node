/**
 * Created by christopher on 19/04/18.
 */
var button = document.querySelector('#add');
function createTR() {
    var newTr = {
        tr: document.createElement('tr'),
        nome: document.createElement('td'),
        livro: document.createElement('td'),
        altor: document.createElement('td'),
        dias: document.createElement('td')
    };
    return newTr
}
function create(form, createTR) {
    createTR.nome.textContent = form.nome;
    createTR.livro.textContent = form.livro;
    createTR.altor.textContent = form.altor;
    createTR.dias.textContent = form.dias;

    createTR.tr.classList.add('livros');
    createTR.dias.classList.add('data');

    createTR.tr.appendChild(createTR.nome);
    createTR.tr.appendChild(createTR.livro);
    createTR.tr.appendChild(createTR.altor);
    createTR.tr.appendChild(createTR.dias);

    var table = document.querySelector('#table-body');

    table.appendChild(createTR.tr);
}
function myForm() {
    var form = document.querySelector('.myForm');
    var formulario = {
        nome: form.nome.value,
        livro: form.livro.value,
        altor: form.altor.value,
        dias: form.dias.value,
    };
    return formulario
}
function createNewEmprestimo() {
    var form = myForm();
    var tr = createTR();

    vencimento(form.dias, tr.tr);
    if (form.nome != "" && form.livro != "" && form.dias != ""){
        create(form, tr);
    }else {
        console.log("Error")
    }
}

button.onclick = createNewEmprestimo;