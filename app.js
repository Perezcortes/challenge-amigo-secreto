// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Expresión regular que permite letras (incluyendo acentos) y espacios
const regexNombreValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!regexNombreValido.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios. No se permiten números ni símbolos.");
        return;
    }

    amigos.push(nombre);

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombre;
    listaAmigos.appendChild(nuevoItem);

    inputAmigo.value = "";
}

function sortearAmigo() {
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
