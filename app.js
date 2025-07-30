// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres ingresados
const amigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Crear un nuevo elemento de lista
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombre;
    listaAmigos.appendChild(nuevoItem);

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para sortear un nombre al azar
function sortearAmigo() {
    // Limpiar resultado anterior
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(resultadoItem);
}
