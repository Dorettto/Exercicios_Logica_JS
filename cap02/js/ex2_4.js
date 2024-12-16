//cria referência ao form e ao elemento h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte de evento, acionado quanto o botçao submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) //obtém o conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo //calcula o valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //exibe a resposta

    e.preventDefault() //evita o envio do form
});