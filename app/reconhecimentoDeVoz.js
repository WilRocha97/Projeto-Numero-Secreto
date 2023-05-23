const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//configura a linguagem do reconhecimento de voz e incia a api
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//captura o evento de fala
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    // captura o conteudo transcrito pela api
    chute = e.results[0][0].transcript
    //exibe na tela
    exibeChuteNaTela(chute)
    //valida o valor do chute
    validaChute(chute)
}

//exibe na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <div class="resultado">
            <span class="box">${chute}</span>
        </div>
    `
}

recognition.addEventListener('end', () => recognition.start())
