class Persona {
 
    // Private -> # 
    #nombre
    #edad
     // Protected -> _isDeveloper
    // mismo comportamiento que en Java 
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }

    // Getter (mismo comportamiento con Java)
    obtenNombre() {
        return this.#nombre;
    }


    #obtenEdad() {
        return "a";
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }
  

}

const persona = new Persona("Adrián",30);
// console.log(persona);
// console.log(persona.nombre);
// persona.saludo();

// Como es la encapsulación en JS:

// persona.nombre = "Adios"; //obviamente se cambio la propiedad
// console.log(persona.nombre);
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());

// a las protected no se puede acceder
const edad = persona.getEdad();
console.log(edad)

persona.setEdad(31);

console.log(persona.getEdad())