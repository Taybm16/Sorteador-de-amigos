//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let nome = input.value.trim()


    if(nome === ""){
        alert("Por favor, digite um nome válido!")
        return
    }

    amigos.push(nome)

    atualizarLista()

    input.value = "";
    input.focus();

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ''



}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo para sortear!</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${amigoSorteado} </strong> 🎉</li>`;

    amigos = []
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
}