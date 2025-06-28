const botao = document.getElementById('btnMensagem');
const area = document.getElementById('areaMensagem');

function mostrarMensagem() {
    area.textContent = "Você é capaz de conquistar tudo o que deseja!";
}

botao.addEventListener('click', mostrarMensagem)