<<<<<<< Updated upstream
const frm = document.querySelector("form") // cria uma variável referente ao elemento de id=form
const resp = document.querySelector("h3") // cria uma variável referente a todos os h3 do documento

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value // obtèm o que foi digitado no campo inNome e transforma na variável nome
    resp.innerText = `Olá ${nome}` //exibe a resposta do programa
    e.preventDefault() //evita o envio do form para que a resposta fique exibida na tela
=======
const frm = document.querySelector("form") // cria uma variável referente ao elemento de id=form
const resp = document.querySelector("h3") // cria uma variável referente a todos os h3 do documento

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value // obtèm o que foi digitado no campo inNome e transforma na variável nome
    resp.innerText = `Olá ${nome}` //exibe a resposta do programa
    e.preventDefault() //evita o envio do form para que a resposta fique exibida na tela
>>>>>>> Stashed changes
})