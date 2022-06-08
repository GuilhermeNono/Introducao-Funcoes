/**
 * Criar um programa que tenha as funcoes de: Soma, subtração, multiplicação e divisão.
 */

const userInputOperation = parseInt(prompt("Informe o numero da operação que deseja usar:\n 1. Soma \n 2. Subtração\n 3. Multiplicação\n 4. Divisão"))
const InputFirstValue = parseInt(prompt("Informe o primeiro valor a ser calculado:"))
const InputSecondValue = parseInt(prompt("Informe o segundo valor a ser calculado:"))


switch (userInputOperation) {
    case 1:
        alert(Soma(InputFirstValue, InputSecondValue))
        break;
    case 2:
        alert(Sub(InputFirstValue, InputSecondValue))
        break;
    case 3:
        alert(Mult(InputFirstValue, InputSecondValue))
        break;
    case 4:
        alert(Div(InputFirstValue, InputSecondValue))
        break;
}

function Soma(primeiroValor, segundoValor){
    return primeiroValor + segundoValor
}
function Sub(primeiroValor, segundoValor){
    return primeiroValor - segundoValor 
}
function Mult(primeiroValor, segundoValor){
    return primeiroValor * segundoValor 
}
function Div(primeiroValor, segundoValor){
    return primeiroValor / segundoValor 
}