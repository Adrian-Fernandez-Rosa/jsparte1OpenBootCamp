// Funciones generadores, existe sintaxis especial para estas funciones

function* generaId() {
    let id = 0;
    while(true) {
        id++;
        if (id === 10){
            return id;
        }
        yield id; // es una especie de return hasta que se vuelva a llamar
        
    }
}

const gen = generaId(); // gen es un iterable

console.log(gen.next().value) 
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next()) // aqui devuelve value: 10 y done: true (la función ya ha terminado)

