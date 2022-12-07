// Sesión 5 - NumbersPrecision
let a = 5;

console.log(a);

let b= 0.1;

console.log(b);

// NumbersPrecision
let c = 0.2;

console.log(b+c); // js se invento unos decimales extra
// esto sucede por la forma de guardar los números en memoria.

// posibles soluciones:

console.log((Math.round((0.1 + 0.2)*100)/100));

// ********************************* Principales Operaciones Aritméticas ;

let num1 = 3.5;
let num2 = 4.8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a + b);

// Representación de los números en cadenas de texto.

console.log(typeof a);

let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales

let d = 3.3;
let e = d * 3;

console.log(e);

console.log(e.toFixed(4));
console.log(typeof e.toFixed(4));

// .toPrecision(x) - Limita el número de cifras signifactivas

console.log(e.toPrecision(4))


