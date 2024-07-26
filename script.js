function enviar_mensagem() {
    let input = document.querySelector('.input')
    let escopo = document.createElement('div')
    let texto = document.createElement('p')
    texto.innerText = input.value
    escopo.append(texto)
    let secao = document.querySelector('.mensagens')
    secao.append(escopo)
    input.value = ''
}

function excluir_mensagens() {
    let secao = document.querySelector('.mensagens')
    secao.innerHTML = ''
}

let enviar = document.querySelector('.enviar')
enviar.addEventListener('click', () => {enviar_mensagem()})

let excluir = document.querySelector('.excluir')
excluir.addEventListener('click', () => {excluir_mensagens()})