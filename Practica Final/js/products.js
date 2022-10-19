// Obtenemos el array de productos desde el local storage
const products = JSON.parse(localStorage.getItem("products"));

// Obtener el Div creado en el main del HTML en donde guardaremos las cards de los productos
const productosHTML = document.getElementById("productos");

// Creamos el Div de la card con sus propiedades
const divCard = document.createElement("div");
divCard.className = "card";
divCard.style.width = "18rem";

// Debajo creamos las etiquetas necesarias para crear nuestra card
const img = document.createElement("img");
//img.src =

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const h5 = document.createElement("h5");
h5.className = "card-title";

const p = document.createElement("p");
p.className = "card-text";

const a = document.createElement("a");
a.className = "btn btn-primary"
a.innerText = "Agregar al Carrito"
//a.href = 

//Recorremos la lista/array de productos y  por cada producto generaremos la card
products.forEach(product => {
    img.src = product.img;
    h5.innerHTML = product.nombre;
    p.innerHTML = product.precio;
    divCard.appendChild(img);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);
    divCard.appendChild(cardBody);
    // TODO: Realizar esta parte || ¿Cómo podemos guardar cada card sin que se pisen?
    productosHTML.append(divCard);
});

