// Vamos a obtener el formulario manipulando el DOM desde JS
const form = document.getElementById("form");

// Le decimos a JS que cuando el usuario envie los datos del formulario (submit), es decir,
// se ejecute el evento Submit de este Formulario, que realice una acción determinada

form.addEventListener("submit", e => {
    e.preventDefault();

    // Objeto de tipo JSON (nombre de usuario, email)
    let nombreJSON = {
        "nombre" : "Cristian",
        "email": "cristian@mail.com"
    }

    // Para almacenar un JSON en el localstorage debemos cambiarlo a String
    localStorage.setItem("nombre JSON", JSON.stringify(nombreJSON));


    // Obtenemos los  valores que completó el usuario al enviar el Form
    let nombre = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    let email = document.getElementById("email").value;

    alert(nombre.toLowerCase() === "cristian" ? "NO SE PERMITEN CRISTIAN'S" : "¡¡¡Bienvenido/a a nuestra página!!!");
    // Operador Ternario = Es una forma reducida de devolver un valor u otro mediante una validación
    console.log(`El usuario ${nombre}, con contraseña ${password} y con email ${email} fue registrado con éxito!`);
    
    // Guardamos los datos que necesitamos en el local storage
    localStorage.setItem("nombre de usuario", nombre);

    // Obtenemos desde el local storage un String y lo guardamos como JSON con el parse
    let nombreJSONObtenido = JSON.parse(localStorage.getItem("nombre JSON"));

    console.table(nombreJSONObtenido);
})

// El club anti Cristian
// Consigna: Validar que, antes de enviarse el form de registro, se capture el nombre
// que envió el usuario para registrarse y, en caso de ser "Cristian" no admitirlo.






