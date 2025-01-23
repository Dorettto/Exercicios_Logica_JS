const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    let numDivisores = 0 //declara e inicializa o contador

    for (let i = 1; i <= num; i++) {  //percorre todos os possíveis divisores de num
        if (num % i == 0){  //verifica se cada número percorrido é divisível por num
            numDivisores++  //caso seja divisível, é acrescentado no contador
        }
    }
    if (numDivisores == 2) {  //caso tenha apenas 2 divisores, é primo
        resp.innerText = `${num} é primo`
    } else {
        resp.innerText = `${num} não é primo`
    }

})