// Corretores aparecer contato ao clicar
const contatoCorretora = document.getElementById("contatoCorretora");
const contatoCorretor = document.getElementById("contatoCorretor");

contatoCorretora.addEventListener("click", () => {
    contatoCorretora.innerText = '(11) 91111-1111';
    contatoCorretora.style.textDecoration = 'none';
    contatoCorretora.style.color = 'blue';
    contatoCorretora.style.fontSize = '0.7rem';
    contatoCorretora.style.fontWeight = '600';
})

contatoCorretor.addEventListener("click", () => {
    contatoCorretor.innerText = '(11) 92222-2222';
    contatoCorretor.style.textDecoration = 'none';
    contatoCorretor.style.color = 'blue';
    contatoCorretor.style.fontSize = '0.7rem';
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
    var telInput = document.getElementById("telInput");
    var cpfInput = document.getElementById("cpfInput");

    // Os campos de CPF e telefone devem conter exatamente 14 characteres para serem validado.
    if (
        form.checkValidity() && telInput.length === 14 && cpfInput.length === 14
        ) {
        alert('Mensagem enviada! Em breve retornaremos o contato.');
        form.submit();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Regra de 3
function calcular() {
    event.preventDefault()

    let valor1 = document.getElementById('number1');
    let valor2 = document.getElementById('number2');
    let valor3 = document.getElementById('number3');
    let valor4 = document.getElementById('number4');

    let result = (valor3.value * valor2.value) / valor1.value;
    valor4.value = parseFloat(result)
}

// HTML2Canvas
function downloadArea5() {
    var area5 = document.querySelector("#area5div1");

    html2canvas(area5)
    .then(function (canvas) {
        var link = document.createElement('a');

        link.download = 'captura_de_tela.png';
        link.href = canvas.toDataURL();
        link.click();
    });

}

// Menu Hamburger
function openMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const computedStyle = window.getComputedStyle(mobileMenu);

    // Verifica se o menu está visível ou não com base no estilo computado
    const isVisible = computedStyle.display !== 'none';

    // Alterna a visibilidade do menu com base na verificação acima
    mobileMenu.style.display = isVisible ? 'none' : 'block';
}
