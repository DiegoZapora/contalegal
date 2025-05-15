let contador = Number(localStorage.getItem("contador")) || 0

const cont = document.getElementById("contador")
const viper = document.getElementById("contar")
const angra = document.getElementById("resetar")
const shaman = document.getElementById("virgo")

cont.textContent = contador

viper.addEventListener("click", () => {
    contador++
    cont.textContent = contador
    localStorage.setItem("contador", contador)
    shaman.innerHTML = `CONTINUE! Você já Clicou ${contador} vezes!`

    if (contador === 10) {
        document.getElementById("cont").style.backgroundColor = "red"
    }

    if (contador === 50) {
        document.getElementById("cont").style.backgroundColor = "orange"
    }

    if (contador === 100) {
        document.getElementById("cont").style.backgroundColor = "gray"
        shaman.innerHTML = 'Parabéns, você desbloqueou um segredo! <a href="https://youtu.be/SGpQDIeiTYo?si=94pg337O9sRfULDe" target="_blank">Clique Aqui</a>'
    }
})

angra.addEventListener("click", () => {
    contador = 0
    cont.textContent = contador
    localStorage.setItem("contador", 0)
    document.getElementById("cont").style.backgroundColor = "blue"
    shaman.innerHTML = "Clique para começar a contar."
})