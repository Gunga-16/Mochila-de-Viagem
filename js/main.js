const form = document.getElementById("novo_item")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    cria_elemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function cria_elemento(nome, quantidade) {
    const novo_item = document.createElement('li')
    novoItem.classList.add("item")

    const numero_item = document.createElement('strong')
    numero_item.innerHTML = quantidade

    novo_item.appendChild(numero_item)
    novo_item.innerHTML += nome

    lista.appendChild(novo_item)
}
