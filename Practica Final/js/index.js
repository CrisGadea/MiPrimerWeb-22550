const productos = [
    {
        id: 1,
        nombre: "Silla Gamer",
        descripcion: "lorem insump njidanji ewifjbfijwe ejwinfijew f",
        precio: 60000,
        stock: 10,
        img: "./img/silla-gamer.webp",
        categoria: "tecnología"
    },
    {
        id: 2,
        nombre: "Teclado Gamer",
        descripcion: "lorem insump njidanji ewifjbfijwe ejwinfijew f",
        precio: 30000,
        stock: 10,
        img: "../img/teclado.webp",
        categoria: "tecnología"
    },
    {
        id: 3,
        nombre: "Monitor Gamer",
        descripcion: "lorem insump njidanji ewifjbfijwe ejwinfijew f",
        precio: 130000,
        stock: 10,
        img: "../img/monitor.webp",
        categoria: "tecnología"
    }
];

localStorage.setItem("products", JSON.stringify(productos));

