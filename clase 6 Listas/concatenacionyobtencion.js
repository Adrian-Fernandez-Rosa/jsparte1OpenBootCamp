// Cómo unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

// Cómo unir dos listas con el factor de propagación

console.log(...lista3); // muestra con espacio los valores de la lista 3

const lista4 = [...lista1, ...lista2]; 
// la manera anterior se usa en los frameworks mas populares
console.log(lista4);

// ERROR!! Mal entendido el concepto del factor de propagación

const lista5 = [lista1, lista2];
console.log(lista5); 

// Obtener una lista a partir de otra lista1 .slice() substring
const array = ["hola" , 1, 2, 3, true, null, "adios"];

// El método slice NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(array.slice(1, 3)); // 1, 2

const array3 = array.slice(2, -4);// con el valor negativo toma cuantos valores antes del final cortara!

console.log(array3); 
