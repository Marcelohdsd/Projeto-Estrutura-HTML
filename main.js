// Calculadora Simples

let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');

function somar() {
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.value = final;
}

function subtrair() {
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.value = final;
}

function multiplicacao() {
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.value = final;
}

function divisao() {
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.value = final;
}

function imc() {

    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    let resultadoIMC = Number(peso) / (Number(altura) * Number(altura));

    document.querySelector('#imcResultado').value = resultadoIMC.toFixed(2);

    //Definir as considerações baseadas no IMC calculado
    let consideracoes = document.querySelector('#consideracoes');
    if (resultadoIMC < 18.5) {
        consideracoes.textContent = 'Voce esta abaixo do Peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {
        consideracoes.textContent = 'Peso Normal';
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        consideracoes.textContent = 'Voce esta acima do Peso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
        consideracoes.textContent = 'Obesidade grau 1';
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
        consideracoes.textContent = 'Obesidade grau 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }

}



