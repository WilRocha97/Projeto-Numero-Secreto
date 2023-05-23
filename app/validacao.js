//valida o chute
function validaChute(chute) {
    const numero =+ chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido, deve ser um número.</div>'
        return
    }

    if (maiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, fale um número entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <span class="box">${numeroSecreto}</span>
        <button id="jogar-novamente" class="btn-reiniciar">Jogar novamente</button>
        `
    }else if (numero < numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <div class="resultado">
            <div>O número secreto é menor <i><</i></div>
            <span class="box">${numero}</span>
        </div>`
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <div class="resultado">
            <div>O número secreto é maior <i>></i></div>
            <span class="box">${numero}</span>
        </div>`
    }
}

//verifica se é um número
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}


//verifica se está entre o menor e maior valor
function maiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

//reinicia o jogo
document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})