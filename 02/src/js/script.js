var contador = 0

function clicar() {
    contador++
    document.getElementById('numero').innerHTML = contador 
}
function reset() {
    document.getElementById('numero').innerHTML = contador = 0
}
