// FUNCIONES EN JS

function saludar(){
    console.log("Hola!");
    console.log("Hola2!");
    alert("Hola!");
}

function saludarA (nombre){
    console.log("Hola " + nombre);
}

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

let calcularSuma = function (numero1, numero2){
    return numero1 + numero2
};

let saludarUsuarioConEdad = function (nombre, edad){
    return "Hola soy " + nombre + ", tengo " + edad + " años de edad";
};


const obtenerNombre = nombre => nombre;

// LOCAL STORAGE
localStorage.setItem("nombre", nombre);

console.log(saludarUsuarioConEdad(obtenerNombre(nombre),edad));