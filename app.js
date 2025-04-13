let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function pressionarBotao(){
    alert ("O botão foi clicado");
}

function alerta(){
    alert ("Eu amo JS");
}

let cidade = "";
function cidadeDoBrasil (){
    cidade =  prompt ("Diga uma cidade do brasil");
    alert ("Estive em " + cidade + " e lembrei de você");
}

let numero1;
let numero2;
let resultado;
function soma(){
    numero1 = parseFloat(prompt ("Digite um número"));
    numero2 =  parseFloat(prompt("Digite outro número"));
    resultado = numero1 + numero2;
    alert ("A soma dos dois números é " + resultado);
}