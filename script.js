function enviarMensagem() {
    let input = document.querySelector('.input');
    let escopo = document.createElement('div');
    let texto = document.createElement('p');
    texto.innerText = input.value;
    escopo.append(texto);
    let secao = document.querySelector('.mensagens');
    secao.append(escopo);
    input.value = '';
}

function excluirMensagens() {
    let secao = document.querySelector('.mensagens');
    secao.innerHTML = '';
}

function editarMensagem() {
    let secao = document.querySelector('.mensagens');
    let ultimaMensagem = secao.lastElementChild;
    let texto = ultimaMensagem.querySelector('p');
    let novoTexto = prompt("Edite a última mensagem:", texto.innerText);
    texto.innerText = novoTexto;
}

let enviar = document.querySelector('.enviar');
enviar.addEventListener('click', () => { enviarMensagem(); });

let excluir = document.querySelector('.excluir');
excluir.addEventListener('click', () => { excluirMensagens(); });

let editar = document.querySelector('.editar');
editar.addEventListener('click', () => { editarMensagem(); });