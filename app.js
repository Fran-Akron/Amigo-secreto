//Challenge Amigo Secreto

let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value.trim();

    if (!nombreIngresado) {
        alert("Esta casilla no puede quedar en blanco. Por favor ingresa un nombre.");
        return;
    }

    amigos.push(nombreIngresado);
    mostrarAmigos();
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
    let contenedorNombres = document.getElementById("listaAmigos");
    contenedorNombres.innerHTML = "";

    amigos.forEach(function(nombre) {
        let itemNombre = document.createElement("li");
        itemNombre.textContent = nombre;
        contenedorNombres.appendChild(itemNombre);
    });
}

function sortearAmigo() {
    let contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Sin nombres, no podemos realizar el sorteo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    let elementoResultado = document.createElement("li");
    elementoResultado.textContent = `🤫 El amigo secreto es: ${amigoSeleccionado} 🤫`;
    contenedorResultado.appendChild(elementoResultado);
}
