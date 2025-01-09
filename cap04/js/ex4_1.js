const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4") //cria referência ao form e elementos de resposta do programa

frm.addEventListener("submit", (e) => { //cria um ouvinte de evento, acionado quando o botão submit é clicado
    e.preventDefault() //evita o envio do form
    const nome = frm.inNome.value //obtém valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2 //calcula a media das notas e relaciona com a variável media
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    //criando as condições:

    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
    } else if (media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está de exame`
        resp2.style.color = "green"
    } else{
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
})