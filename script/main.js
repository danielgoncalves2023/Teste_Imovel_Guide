// Corretores aparecer contato ao clicar
const contatoCorretora = document.getElementById("contatoCorretora");
const contatoCorretor = document.getElementById("contatoCorretor");

contatoCorretora.addEventListener("click", () => {
    contatoCorretora.innerText = '(11) 91111-1111';
    contatoCorretora.style.textDecoration = 'none';
    contatoCorretora.style.color = 'blue';
    contatoCorretora.style.fontSize = '0.8rem';
    contatoCorretora.style.fontWeight = '600';
})

contatoCorretor.addEventListener("click", () => {
    contatoCorretor.innerText = '(11) 92222-2222';
    contatoCorretor.style.textDecoration = 'none';
    contatoCorretor.style.color = 'blue';
    contatoCorretor.style.fontSize = '0.8rem';
    contatoCorretor.style.fontWeight = '600';
})

// Janela total da página ao abrir modal
const modal = document.getElementById('modal'); 

function abrirModal() {
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
}

// Enviar mensagem do formulário
function enviarMensagem() {
    var form = document.getElementById("form");

    if (form.checkValidity()) {
        alert('Mensagem enviada! Em breve retornaremos o contato.');
        form.submit();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Regra de 3
var valor1 = document.getElementById('number1');
var valor2 = document.getElementById('number2');
var valor3 = document.getElementById('number3');
var valor4 = document.getElementById('number4');

function calcular() {
    event.preventDefault()

    let result = (valor3.value * valor2.value) / valor1.value;
    valor4.value = parseFloat(result)
}

// HTML2Canvas
function downloadArea5() {
    var area5 = document.querySelector("#area5div1");

    html2canvas(area5).then(function (canvas) {
        var link = document.createElement('a');

        link.download = 'captura_de_tela.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Menu Hamburger
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', function () {
        mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
    });
});