const frm = document.querySelector("form")  //obtém os elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form
    const numero = Number(frm.inNumero.value) //obtém número digitado no form
    const raiz = Math.sqrt(numero) //calcula a raiza quadrada do número

    if (Number.isInteger(raiz)) {   //se o a raiz for um número inteiro...
        resp.innerText = `Raiz: ${raiz}`  //ela será exibida no h3
    } else {  //caso contrário...
        resp.innerText = `Não há raiz exata para ${numero}` //demonstra a seguinte mensagem
    }
})