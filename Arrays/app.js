
console.log("Hello World");

let invitados = [];

invitados[0] = "Cristian";
invitados[1] = "Juan";
invitados[2] = "Carla";

console.log("Tamaño actual de la lista: " + invitados.length);
invitados.push("Cristian");
console.log("Tamaño actual de la lista: " + invitados.length);
invitados.push("Juan");
console.log("Tamaño actual de la lista: " + invitados.length);
invitados.push("Carla");
console.log("Tamaño actual de la lista: " + invitados.length);

invitados.forEach(invitado => {
    console.log("nombre: " + invitado + "\n");
});

let nombre1 = prompt("Ingrese un nombre");
let nombre2 = prompt("Ingrese un segundo nombre");
let nombre3 = prompt("Ingrese un tercer nombre");

alert("Lista de nombres: " + nombre1 + " " + nombre2 + " " + nombre3);



// DOM desde JS

const h1 = document.getElementById("texto");
const parrafoNuevo = document.createElement("p");

parrafoNuevo.className = "parrafo";
parrafoNuevo.style.color = "red";

parrafoNuevo.innerHTML = "lorem insump jdajifnjise ji";

document.body.appendChild(parrafoNuevo);

document.body.style.backgroundColor = "yellow";

console.log(h1.textContent);

//document.body.removeChild(parrafoNuevo);

function verHoraActual(){
    document.getElementById("demo").innerHTML = Date();
}
/*
const saludar = () =>{
    const info = document.querySelector('#campoNombre').value;
    console.log(info);
}

document.querySelector('#btn').addEventListener('click', saludar);
*/