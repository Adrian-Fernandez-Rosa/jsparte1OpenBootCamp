// Listas, array o arreglo

const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(1, "chau");
const lista3 = new Array(3);

lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Adri", "Marzo", "Raúl"],
    tarjeta: {
        marca:"Scandisk",
        almacenamiento: 32
    }
}

console.log(movil.contactos);
console.log(movil.tarjeta.marca);

//creando nuevo atributo
movil.anyo = 2019

console.log(movil.anyo);




// Fechas
// Librerías de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //  Utilizando los milisegundos

console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes , anyo)