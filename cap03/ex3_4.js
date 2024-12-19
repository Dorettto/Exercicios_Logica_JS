const prompt = require("prompt-sync")() // adiciona o pacote ao programa

const peso = Number(prompt("Peso da ração (kg):")) // lê os dados de entrada
const consumo = Number(prompt("Consumo Diário (gr):"))
const pesoGr = peso * 1000 // cria uma variável auxiliar

const duracao = Math.floor(pesoGr/consumo) // cáculo das respostas
const sobra = pesoGr % consumo

console.log(`Duração: ${duracao} dias`) // dados de saída
console.log(`Sobra: ${sobra}gr`)