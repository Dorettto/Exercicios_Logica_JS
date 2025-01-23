const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" //string com a resposta a ser exibida
let numContas = 0 //inicializa o contador
let valTotal = 0 //inicializa o acumulador

frm.addEventListener("submit", (e) => { //escuta o submit do form
    e.preventDefault()

    const descricao = frm.inDescricao.value //captura os valores de cada campo preenchido
    const valor = Number(frm.inValor.value)

    numContas++ //adiciona valores ao contador e acumulador
    valTotal = valTotal + valor //também pode ser escrito como valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "/n"

    resp1.innerText = `${resposta} ------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" //limpa os campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus() //posiciona no campo inDescricao do form
})