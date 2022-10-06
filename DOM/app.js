console.log("HOLA");

let title = document.getElementById("title");
title.style.color = "red";
title.style.textAlign = "center";

console.log(title)

const form = document.getElementById("form");

form.addEventListener("submit",e => {
    // TODO: Encontrar el motivo por el cual no se muestran el nombre y apellido que colocamos en el form
    e.preventDefault();
    const nombre = document.getElementById("nombre").textContent;
    const apellido = document.getElementById("apellido").textContent;
    alert("Hola " + nombre + " " + apellido);
})

console.log(nombre, apellido)

// OBJETOS EN JS
// Para construir un objeto en JS se necesita de propiedas (caracteristicas) - variables y constantes Y de comportamientos (funciones)
// Objeto JSON: JavaScript Object Notation
const gato = {
    "cantidadPatas" : 4,
    "color": "negro",
    "colorDeOjos": "Amarillos",
    "edad": 2,
    "nombre" : "Cleo",

    maullar(){
        alert("MIAAAUU");
    }
}

gato.maullar();