//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form") 
const resp = document.querySelector("h3")

//ouvinte de evento que é acionado quando o botão submit for pressionado
frm.addEventListener("submit", (e) => {
    e.preventDefault()  //evita o envio do form

    const nome = frm.inNome.value  // obtém os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso //declara a variável peso
    if (masculino){
        peso = 22 * Math.pow(altura, 2)  // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg` // apresenta a resposta alterando o conteúdo do h3 no html
})

frm.addEventListener("reset", () => {
    resp.innerText = "" //limpa o conteúdo alterado no elemento h3
})