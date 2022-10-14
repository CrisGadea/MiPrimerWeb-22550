// Ejercitación JS

// 1) OK
//alert("Hello World");

// 2) OK
//console.log("Hello World");

// 3) OK
//alert(3 + 5);


// 4) OK
//const nombre = prompt("ingrese su nombre");
//alert("hola " + nombre);

// 5) OK
//let numero1 = parseInt(prompt("Ingrese un número"));
//let numero2 = parseInt(prompt("Ingrese otro número"));
//alert("La suma de ambos números es: " + (numero1 + numero2));
//alert(`La suma de ${numero1} + ${numero2} da como resultado ${numero1 + numero2}`);

/* 6) OK
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
// Operación Ternaria
let resultado = numero1 > numero2 ? numero1 : numero2;
alert("El mayor es " + resultado);
*/

// 7)
/*
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
let numero3 = parseInt(prompt("Ingrese un último número"));
// Forma tradicional IF-ELSE IF-ELSE
if (numero1 > numero2 && numero1 > numero3) {
    alert("El mayor de todos es " + numero1);
} else if(numero2 > numero1 && numero2 > numero3) {
    alert("El mayor de todos es " + numero2);
} else {
    alert("El mayor de todos es " + numero3);
}
//Forma reducida Math.max
const higher = Math.max(numero1, numero2, numero3);
alert("El mayor es: " + higher);
*/

// 8)
/*
let numero1 = parseInt(prompt("Ingrese un número"));
// Ternaria
alert((numero1 % 2 == 0) ? "Es divisible por 2" : "No es divisible");
*/

// 9) OK
/*
let frase = prompt("Ingrese una frase");
// Contador para saber cuantas veces se repite la letra
let count = 0;
// Recorremos la frase con un bucle for y por cada letra validamos si es una a (para aumentar el contador)
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === "a") {
        count++;
    }
}
// Finalmente mostramos el resultado en un alert
alert("La cantidad de repeticiones que tiene la letra a es de: " + count);
*/


// 10) OK

let frase = prompt("Ingrese una frase");

// Contador para saber cuantas veces se repite la letra
//let count = 0;
/*
// Recorremos la frase con un bucle for y por cada letra validamos si es una a (para aumentar el contador)
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === "a" || frase[i].toLowerCase() === "e"
    || frase[i].toLowerCase() === "i" || frase[i].toLowerCase() === "o"
    || frase[i].toLowerCase() === "u") {
        console.log(frase[i]);
    }
}
*/
// Solucion reducida
const vocales = ["a", "e", "i", "o", "u"];
/*
for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])){
        console.log(frase[i]);
    }
}*/

// 11)
/*
for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i].toLowerCase())){
        count++;
    }
}

alert("La cantidad de vocales en la frase es de: " + count);
*/
let counta = 0;
let counte = 0;
let counti = 0;
let counto = 0;
let countu = 0;

// 12)
for (let i = 0; i < frase.length; i++) {
    switch (frase[i].toLowerCase()) {
        case "a":
            counta++;
            break;
        case "e":
            counte++;
            break;
        case "i":
            counti++;
            break;
        case "o":
            counto++;
            break;
        case "u":
            countu++;
            break;
        default:
            break;
    }    
}

console.log(`La cantidad de a es de: ${counta}
La cantidad de e es de: ${counte}
La cantidad de i es de: ${counti}
La cantidad de o es de: ${counto}
La cantidad de u es de: ${countu}`)