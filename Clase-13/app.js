// Hola soy un comentario de linea
/*
    Hola soy un comentario de bloque
    Por eso puedo escribir
    en muchos renglones
*/
// VARIABLES EN JS
let nombre;
let edad; // Variable no inicializada
//var nombre = "Cristian"; // Variable con valor inicial Cristian
//alert(nombre);
//edad = 25;
//nombre = "Hernán";
//alert(nombre);


// Mostrar informacion en el navegador (pagina web/HTML)

// Mostramos un pop-up con la data
//alert("WELCOME TO JAVASCRIPT!");
// Mostramos la data por consola
//console.log("Hola, mi nombre es " + nombre);
//console.info("Soy una informacion desde la consola");
//console.warn("ALERTA!");
//console.error("ERROR!!");


// Recibir informacion por teclado (a traves de un pop-up)
//nombre = prompt("Escriba su nombre");
//edad = 25;

//const ANIO_ACTUAL = 2022;


//console.log(edad);
//alert("Bienvenido/a " + nombre);
//console.log(nombre);

// Mostrar el año actual
//alert("El año actual es: " + ANIO_ACTUAL);
//console.log(ANIO_ACTUAL);

var number1 = 4;// El simbolo + en textos se utiliza como concatenacion (es decir, para pegar dos textos uno al lado del otro)

var number2 = 2;

//console.log("El resultado de la division es: " + (number1 / number2)); 

const texto = `addssfdffdslfdmfdlmop.()f,eopmopeerg`;

//console.log(typeof false);

// CONDICIONALES
// Para pasar una variable String/texto a número isamos parseInt
edad = parseInt(prompt("Indique su edad"));
// IF - ELSE
/*
if (edad >= 18) {
    alert("Sos mayor!");
} else {
    alert("Sos menor!");
}
*/

// CONDICIONAL SWITCH

switch (edad) {
    case 10:
        console.log("Sos menor de edad");
        break;
    case 18:
        console.log("Sos mayor de edad");
        break;
    default:
        console.log("Ingrese una edad correcta");
        break;
}

// ESTRUCTURAS ITERATIVAS (REPETITIVAS)
// BUCLE FOR
/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

//ESTRUCTURA WHILE
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}