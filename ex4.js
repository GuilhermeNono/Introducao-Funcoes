/**
 * Criar uma função que retorne um true caso o valor seja impar.
 */

const userInput = parseInt(prompt("Informe o valor a ser calculado:"))

if(isOdd(userInput)){
    alert("O valor é impar")
} else {
    alert("O valor é par")
}

function isOdd(valor){
    if(valor % 2 !== 0){
        return true;
    }
    return false;
}