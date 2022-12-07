// .sort() -> MODIFICA EL ARRAY

const array = [2, 5, 9, 15, 1, 2, 0 , 4]

console.log(array);

array.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1
    } else {
        return 0;
    }
})

console.log(array);

// Ordenar únicamente arrays númericos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

array.sort((a, b) => a - b);

console.log(arrayNumerico);

// Interesante en array de Objetos
const listaObjetos = [
    {nombre: "Codifica",edad: 31},
    {nombre: "Adrián",edad: 30},
    {nombre: "Ariana",edad: 39},
];

// Ordenando de edad de menor a personasMayores
/*
listaObjetos.sort((a, b) => {
    if (a.edad < b.edad){
        return -1;
    } else if (a.edad > b.edad){
        return 1;
    }else {
        return 0;
    }
})
*/

console.log(listaObjetos);

listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos);

//************************************************************************** */

// Como podemos comparar listas
// .every 

const array2 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

const resultado = array.every(valor => {
    if (typeof valor === "number"){
        return true;
    } else {
        return false;
    }
});

console.log(resultado)

// como hacer lo anterior más sencillo

const array3 = [4, 6, 7, 8, 3, 6, 2, 1, -4, 0, 12, 5, -40];

const resultado3 = array.every(valor => valor > 0);

console.log(resultado);


// Comparación de listas  

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); // Devuelve false



const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false

    const res = array_1.every((valor, i) => valor === array_2[i])
    return res;
}

console.log(compararArrays(ar1, ar2));

const ar3 = [ 1, 2, 7];

console.log(compararArrays(ar1, ar3))

// .some() true si al menos uno lo cumple

const array4 = [4, 6, 7, 8, 3, 6, 2, 1, -4, 0, 12, 5, -40];

const res = array.some(valor => valor < 10);

console.log(res);

const existe = array4.some(valor => valor === -40);

console.log(existe);

const listaObjetos2 = [
    {nombre: "Codifica", edad: 31},
    {nombre: "Adrián", edad: 30},
    {nombre: "Ariana", edad: 39},
    {nombre: "Aimara", edad: 50}
];

const existeAimara = listaObjetos2.some( persona => persona.nombre === "Ariana");

console.log(existeAimara);

// Cómo obtener una lista a partir de un objeto iterable

const str = "Hola soy Adrían";

console.log(str[0]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// Obtener un iterable de todos los indice de un array
console.log(array);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys); //obtuvimos los indices


