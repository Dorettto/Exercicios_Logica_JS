const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4") // cria variáveis relacionando form e elementos h3 e h4

frm.addEventListener("submit", (e) => { //cria um ouvinte de evento, acionando quando o botão submit for clicado
    const titulo = frm.inTitulo.value //obtém o conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado, dividindo por 60 para obter as horas
    const minutos = duracao % 60 //obtém o resto da divisão

    resp1.innerText = titulo //exibe as respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos (s)`

    e.preventDefault() // evita o envio do form
})

