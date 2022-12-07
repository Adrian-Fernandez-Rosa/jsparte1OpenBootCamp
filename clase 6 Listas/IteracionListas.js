// Iterar los valores de una lista1

const array = ["hola", 2, 5, 90, false, undefined];

// Forma ES6 (eficiente) .forEach()
let suma = 0;

array.forEach((valor) => {
  console.log(valor);
});

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90

const variable = array.find((valor) => {
  if (valor === 90) {
    return true; // si no era queda como undefined
  }
});

console.log(variable);

const listaObjetos = [
  {
    nombre: "Adrián",
    edad: 30,
  },
  {
    nombre: "Codifica",
    edad: 30,
  },
  {
    nombre: "Ariana",
    edad: 39,
  },
];

const objeto = listaObjetos.find(o => {
    if(o.nombre === "Adrián"){
        return true;
    }
})



console.log(objeto.edad);

// Simplificando lo anterior

const objeto2 = listaObjetos.find(o => {
    return o.nombre === "Ariana";
});

console.log(objeto2.edad);

// Simplicando otra vez

const objeto3 = listaObjetos.find(o => o.nombre === "Ariana");

console.log(objeto3.edad);

// destructuracion

const { edad } = listaObjetos.find(o => o.nombre === "Adrián");
console.log(edad);

