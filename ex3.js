/**
 * Criar um programa com uma função que converta Celsius para Fahrenheit.
 */

const userInput = parseInt(prompt("Informe o valor em celsius:"))

alert(`${userInput}C° é equivalente a ${CelsiusToFahrenheit(userInput)}F°`)

function CelsiusToFahrenheit(celsius) {
    return (celsius * (9/5) + 32)
}