/**
 * Criar um programa que calcule a raiz quadrada de um valor.
 */

const userInput = parseInt(prompt("Informe o valor a ser calculado:"));

alert(`A raiz quadrada de ${userInput} é igual a ${Square(userInput)}`)

function Square(valor) {
    return Math.sqrt(valor)
}