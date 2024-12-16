//criando referência ao form e aos elementos de resposta de acordo com seu id

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//cria um ouvinte de evento, acionado quando o botao submit for acionado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtém os dados dos campos
    const preco = Number(frm.inPreco.value) //transforma o dado preço em numeral

    const entrada = preco * 0.50 // calcula o valor da entrada que corresponde a 50% do valor
    const parcela = (preco * 0.50) / 12 // calcula o valor de cada uma das 12 parcelas que corresponde ao restante do valor de 50%

    resp1.innerText = `Promocao: ${veiculo}` // exibe as respostas calculadas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    e.preventDefault() //evita o envio do form
})