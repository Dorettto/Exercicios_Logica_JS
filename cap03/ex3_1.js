const prompt = require("prompt-sync")() // adiciona o pacote para entrada de dados

const num1 = Number(prompt("Primeiro Número: ")) // lê os números
const num2 = Number(prompt("Segundo Número: "))

const soma = num1 + num2 // calcula a soma
console.log(`A soma é ${soma}`) //exibe o resultado