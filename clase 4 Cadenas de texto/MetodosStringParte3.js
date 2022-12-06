// Métodos de cadenas de texto (parte 3) 
// https://regexr.com

// Expesiones regulares y métodos de búsqueda de cadenas

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar los árboles y odia comerplátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles";

// cuantas veces aparece la palabra los. 

console.log(texto_largo.match(/los/g));

// nos dice si existe el substring dentro del string
console.log(texto_largo.includes("prefiere"));

// Saber si un texto empieza con una palabra.

// Saber si un texto termina con una palabra.