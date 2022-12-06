// Mètodos de cadenas de texto parte 2

let input = "Escorpio";

let db= "escorpio";

// toLowerCase() - toUpperCase()

console.log( input.toLowerCase === db.toLowerCase);

// formas de concatenar 2 cadenas

console.log(input.concat(" ", " .",db));

console.log(`${input} ${db}`)

// Eliminar espacios al inicio y al final

let str_3 = "        hola soy un string con espacios          ";
console.log(str_3.length);
console.log(str_3.trim().length);

//trimStart para los espacios iniciales

// trimEnd para los espacios finales

// Obtener el caracter que hay en cirta posición

let str_4 = "Hola soy el string número 4";

console.log(str_4.charAt(3));

console.log(str_4[5]); 

// Obtener la posición de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy Adrián y soy Codificador";

console.log(str_5.indexOf("Adrián"));

console.log(str_5.charAt(9));

console.log(str_5.lastIndexOf("a")); //29

console.log(str_5.substring(29));

