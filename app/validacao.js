//valida o chute
function validaChute(chute, tentativas) {
    const numero = +chute
    tentativas ++
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido, deve ser um número.</div>'
        return tentativas
    }

    if (maiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, fale um número entre ${menorValor} e ${maiorValor}.</div>`
        return tentativas
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h4>${tentativas} tentativas.</h4>
        <span class="box">${numeroSecreto}</span>
        <button id="jogar-novamente" class="btn-reiniciar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <div class="resultado">
            <div>O número secreto é menor <i><</i></div>
            <span class="box">${numero}</span>
        </div>
        `
    }else if (numero < numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <div class="resultado">
            <div>O número secreto é maior <i>></i></div>
            <span class="box">${numero}</span>
        </div>
        `
    }
    return tentativas
}

//verifica se é um número
function chuteInvalido(numero) {
    if (Number.isNaN(numero)){
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =`
                <h1 class="game-over">GAME OVER!</h1>
                <span class="box">${numeroSecreto}</span>
                <button id="jogar-novamente" class="btn-reiniciar">Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        }else {
            return Number.isNaN(numero)
            }
    }
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