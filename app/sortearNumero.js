const menorValor = 0
const maiorValor = 1000
//salva um valor sorteado
const numeroSecreto = gerarNumeroAleatorio()

//função para sortear um valor
function gerarNumeroAleatorio(params) {
    return parseInt(Math.random() * maiorValor + 1)
}

//setando as margens dos valores que o app vai sortear
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor