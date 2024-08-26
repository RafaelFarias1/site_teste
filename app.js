//comeco mudar tag
function mudarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagem(){
    mudarTexto('h1','rafao e foda')
}

exibirMensagem();
//final mudar tag


function calcularImc(altura, peso){
    return parseInt(peso / (altura * altura));
}

function botaoLegal1(){
    let altura = prompt ('Qual e sua altura?');
    let peso = prompt ('Qual e seu peso?');
    let resultado = calcularImc(altura, peso);
    mudarTexto ('#meuDiv', `O seu IMC e ${resultado}`);
}

