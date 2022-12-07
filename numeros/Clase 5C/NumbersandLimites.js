// Operador .valueOf() - Obtener valores númericos a partir de literales

let a = 2;

let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str); // iteracion

console.log(str.valueOf()); 

// NaN (Not a Number)- Infinity

let n = Number('adios'); 

console.log(n); //devuelve NaN

console.log(isNaN(n));

let numerador = 19;
let divisor = 2;
let divisor_2 = null;
console.log(numerador / divisor);
console.log(numerador / divisor_2); // infinito
// Cómo convertir los string a valores númericos con Numer, parseInt y ParseFloat.

let numeroo = '5.89';
let num2 = 17.2
console.log(typeof numeroo); // String

console.log(numeroo + num2); //concatena string, no suma números

//solución:
console.log(Number(numeroo) + num2);


// parseInt

console.log(parseInt(numeroo));
console.log(parseFloat(numeroo));

let num3 = 4;

console.log(parseFloat(num3));


// Números hexadecimales

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));



// Obtener los valores máximo y mínimo en JavaScript

let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);

