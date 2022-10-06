/*
alert("Hello World!");
console.log("Hello world!");

let nombre = "Cristian";
nombre = "José";

if (nombre == "José"){
    var apellido = "Gadea";
    nombre = "Jose";
    console.log(apellido);
}

console.log(nombre);
console.log(apellido);
*/

/*
 * Ejercicio Práctico: Creación de una calculadora simple (Visto desde la lógica). 
    1) Pedimos al usuario un número.
    2) Le volvemos a pedir al usuario otro número.
    3) Le damos a elegir al usuario la operación a realizar con dichos números.
    4) Le mostramos al usuario el resultado en pantalla.
 */

// Paso 1
alert("Bienvenido/a a nuestra calculadora online!!");
var numero1 = parseInt(prompt("Ingrese un número"));
// Paso 2
var numero2 = parseInt(prompt("Ingrese otro número"));



// TAREA
// LOGRAR  EJECUTAR EL PROGRAMA HASTA QUE EL USUARIO ELIJA CORRECTAMENTE LA OPERACION
var isValid; // Podemos omitirlo si validamos dentro del while
var operacion;
// El While primero valida y luego ejecuta le ciclo
// El Do While primero ejecuta una vez el codigo y luego valida
do {
    // Paso 3
operacion = parseInt(prompt("Operación a realizar: 1) Suma, 2) Resta, 3) Multiplicacion, 4) Division"));

// Creamos una variable de resultado para indicar luego el dato obtenido
var resultado = 0;

console.log(numero1, numero2, operacion);

// Dependiendo la opción elegida por el usuario,utilizaremos un switch case para ejecutar la operación
switch (operacion) {
    case 1:
        resultado = numero1 + numero2;
        break;
    case 2:
        resultado = numero1 - numero2;
        break;
    case 3:
        resultado = numero1 * numero2;
        break;
    case 4:
        if (numero2 == 0) {
            alert("No se puede dividir por 0!")
        } else{
            resultado = numero1 / numero2;
        }
        break;
    default:
        alert("Por favor elija una opción correcta!");
        break;
    }
} while (operacion < 1 || operacion > 4)
// Paso 4
console.log(resultado);
alert("El resultado de la operación es: " + resultado);
