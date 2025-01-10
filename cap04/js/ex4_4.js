//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    const horaBrasil = Number(frm.inHoraBrasil.value) //obtém e converte em número o conteúdo do campo inHoraBrasil
    let horaFranca = horaBrasil + 5 // calcula o horário da França
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24 //subtrai 24 caso o horário francês ultrapasse das 24h
    }
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}` // exibe a resposta alterando o conteúdo h3 da página
})