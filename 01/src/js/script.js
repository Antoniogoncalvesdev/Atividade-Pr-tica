const nota1 = parseFloat(prompt("Digite sua primeira nota: "))
const nota2 = parseFloat(prompt("Digite sua segunda nota: "))
const media = (nota1 + nota2) / 2

if (media >= 6) {
    alert("Parabéns, você está aprovado!")
}
else {
    alert("Que pena, estude um pouco mais.")
}