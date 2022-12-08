// Trabajando con fechas


const fecha = new Date();

console.log(fecha);

const fecha2 = new Date(1987, 10, 20, 1, 23, 52);

console.log(fecha2);

const fecha3 = new Date(100000000);

console.log(fecha3);

const fecha4 = new Date("Octover 13, 1979");
console.log(fecha4);

console.log(fecha> fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52);

console.log(fecha2 === fecha5) // Error, no se puede comparar fecha de esta maneta

console.log(fecha2.getTime() === fecha5.getTime());

// Obtener el día, mes y año de una fecha 

console.log(fecha2.getDate()) // dia

// Mes
console.log(fecha2.getMonth() + 1);

// año
console.log(fecha2.getFullYear());

// Mostrar una fecha en String

console.log(fecha2)

// .toLocaleDateString 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("es-AR"))