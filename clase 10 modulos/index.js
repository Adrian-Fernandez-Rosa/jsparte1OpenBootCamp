/*
Formas de importar/exportar módulos
 1. CommonJS - Require
 2. Import ES6 - import
*/
// importando... 
//const moduloMatematicas = require('./modulos/matematicas.js');
//console.log(moduloMatematicas)

// otra forma 
//const factorial = moduloMatematicas.factorial;



// forma mucho más sencilla destruct
const {factorial, suma} = require('./modulos/matematicas.js');


const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);


