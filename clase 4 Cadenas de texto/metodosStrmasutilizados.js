// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string


let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr() (este último esta obsoleto)

let slice_str  = str.slice(5, 10);

console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_stre = str.substr(5, 10);
console.log(substr_stre);

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Adrian";
console.log(cadena);


console.log(cadena.replace("Adrian", "Codifica"));

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar los árboles y odia comerplátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles"


console.log(texto_largo.replace('los', 'cinco')); // solo reemplazo la primer ocurrencia

// Al utilizar la expresiòn regular /g global, reemplaza todas las instancias

console.log(texto_largo.replace(/los/g, 'cinco'));
