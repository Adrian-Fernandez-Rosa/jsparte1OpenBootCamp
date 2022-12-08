// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map((valor) => valor * 2)

console.log(array2);

//es mejor hacerlo con arrow function

const dobleDelValor = valor => {
    return valor * 2;
}

const dobleDelValorB = valor => valor * 2;

const array4 = array.map(dobleDelValorB);

console.log(array4);

