// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Rosario", "Santa Fe", "Messina"]


const v = array.forEach(v => {
    console.log(v);
    return 4;
})

console.log(v); // como se notara no devuelve nada

const newArray = array.map((valor, indice) =>  `${indice+1} - ${valor}`)

console.log(newArray);

// Método filter()

const listaObjetos = [
    {nombre: "Adrián",edad: 30,},
    {nombre: "Codifica",edad: 31},
    {nombre: "Ariana",edad: 39,},
];

const personasMayores = listaObjetos.filter(obj =>{
    if (obj.edad > 30){
        return true;
    } 
        return false;
});

console.log(personasMayores);

// simplificando lo anterior

const personasMayores2 = listaObjetos.filter(obj => obj.edad >30);
console.log(personasMayores2);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Adrián");

console.log(nuevaLista);


// Reduce 

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, indice, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(indice);
    console.log(arrayOriginal);

    return acumulado + cur;
} );

console.log(suma);
