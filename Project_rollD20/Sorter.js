function getRandomD20() { /* Parte responsavel pelo sorteio de um numero entre 1 a 20 */
    let valor = Math.floor(Math.random() * 100);
    if (valor && valor <= 20) {
        /* Utilizar valor como parametro apenas, serve para verificar se a variavel realmente existe, então se verifica a parte numérica */
        return valor
    } else {
        /* Caso o valor gerado não seja entre 1 a 20 a recursão serve para recomeçar esta função até se atingir o objetivo */
        return getRandomD20();
    }
}






window.onload = function() { /* Responsavel por carregar o código apenas apos o  Html estar montado impedindo uma chamada inexistente */
    var d20 = getRandomD20();
    console.log(d20); /* Responsavel pela verificação por console, retirar no fim do projeto */
    alert("O valor do dado é: " + d20);
}