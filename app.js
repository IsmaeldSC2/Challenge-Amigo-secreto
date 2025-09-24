//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = ""; // limpa campo
    atualizarLista();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes de atualizar

    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa antes de mostrar novo sorteio

    let li = document.createElement("li");
    li.textContent = "🎉 Amigo sorteado: " + sorteado;
    resultado.appendChild(li);
}
