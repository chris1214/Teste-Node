/**
 * Created by christopher on 19/04/18.
 */

var tr = document.querySelectorAll('.livros');
for (var i = 0; i <= tr.length; i++){
    var total = tr[i];
    vencidos(total);
}

function vencidos(resultado) {
    var tr = resultado;
    var data = tr.querySelector('.data');
    var prazo = data.textContent;
    console.log(data);

    vencimento(prazo, tr);
}
vencidos();