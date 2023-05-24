const elementoChute = document.getElementById('chute')
const form = document.getElementById("palpite")
quantidade.value = ""
try {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    //configura a linguagem do reconhecimento de voz e incia a api
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br'
    recognition.start()

    //captura o evento de fala
    recognition.addEventListener('result', onSpeak)
} catch{}

function onSpeak(e) {
    // captura o conteudo transcrito pela api
    chute = e.results[0][0].transcript
    //exibe na tela
    exibeChuteNaTela(chute)
    //valida o valor do chute
    validaChute(chute)
}

form.addEventListener("submit", (evento) => {
    // previne a ação padrão do botão
    evento.preventDefault()
    console.log(evento)
    // captura e manda os textos inseridos nos campos de nome e quantidade
    const chute = evento.target.elements[0].value
    //exibe na tela
    exibeChuteNaTela(chute)
    //valida o valor do chute
    validaChute(chute)

    quantidade.value = ""
    quantidade.focus()
    })

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
