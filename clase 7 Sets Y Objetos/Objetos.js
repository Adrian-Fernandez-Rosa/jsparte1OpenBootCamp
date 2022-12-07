// Trabajando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}


// Acceder a valores de las propiedades

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj2.nombre);
console.log(obj.nombre); //como se notara obviamente es Iñigo por usar mismo puntero.

// si quisiera copiar un objeto usar el spread operator

const obj3 = { ...obj }
obj3.nombre = "azucar"
console.log(obj3.nombre);
console.log(obj.nombre);

// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [ 
    { titulo: "Lo que el viento se llevó", anyo: 1939},
    { titulo: "Titanic", anyo: 1997},
    { titulo: "Moana", anyo: 2016},
    { titulo: "El efecto mariposa", anyo: 2004},
    { titulo: "TED", anyo: 2012}
]

console.log(listaPeliculas);

// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL;

listaPeliculas.sort((a, b) => a.anyo - b.anyo);

console.log(listaPeliculas);

