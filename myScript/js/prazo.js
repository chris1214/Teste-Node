/**
 * Created by christopher on 19/04/18.
 */
function vencimento(prazo, add) {
    var dataAtual = new Date;
    var dataVencimento = dataAtual.getDate();
    var mesVencimento = dataAtual.getMonth() + 1;
    var anoVencimento = dataAtual.getFullYear();
    var junta = dataVencimento + "/" + mesVencimento + "/" + anoVencimento;

    if (prazo <= junta){
        add.classList.add('vencido');
    }
}