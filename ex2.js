/**
 * Criar um programa com uma função que encontre a porcentagem de um valor.
 */
const firstValue = parseInt(prompt("Informe um valor:"))
const percentValue = parseInt(prompt("Informe qual a porcentagem que deseka obter do numero que passou anteriormente:"))

alert(`${percentValue}% de ${firstValue} é igual a ${Percent(firstValue, percentValue)}`)

function Percent(valor, porcentagem){
    return (valor * (100/porcentagem)).toFixed(2);
}