const nome  = document.getElementById('nome')
const email = document.getElementById('email')
const msg   = document.getElementById('msg')
const form  = document.getElementById('form')

var inputN = ""
var inputE = ""
var inputM = ""

form.addEventListener('submit' , (event) => {
    inputN = nome.value
    inputE = email.value
    inputM = msg.value

    if(inputN === "" || inputE === "" || inputM === "") {
        alert("Preencha todos os campos, por favor!")
        event.preventDefault()
    }
    else{
    return alert(`Nome: ${inputN}\nE-mail: ${inputE}\nMensagem: ${inputM}`)}  
})
