const frm = document.querySelector("form") //obtém os dados da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => { //escuta o submit do form
    e.preventDefault() //evita o envio do form
    const saque = Number(frm.inSaque.value) //obtém o valor do saque
    if (saque % 10 != 0) { //se o saque não é multiplo de 10
        alert("Valor inválido para as notas disponíveis (R$10, 50 e 100)")
        frm.inSaque.focus()
        return
    }
    const notasCem = Math.floor(saque / 100) //calcula as notas de 100 necessárias
    let resto = saque % 100 //calcula o resto
    const notasCinquenta = Math.floor(resto / 50) //calcula as notas de 50 necessárias
    resto = resto % 50 //calcula quanto ainda falta para pagar
    const notasDez = Math.floor(resto / 10) //calculas as notas de 10 necessárias

    if (notasCem > 0) { //exibe as notas se houver
        resp1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez > 0){
        resp3.innerText = `Notas de R$10: ${notasDez}`
    }
})