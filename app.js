
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en tu lista de amigos.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = ""; // Limpiar el campo de texto

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar la lista

    for (let amigo of amigos) {
        let listItem = document.createElement("li");
        listItem.textContent = amigo;

        lista.appendChild(listItem);
    }
}

function nuevaLista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}


