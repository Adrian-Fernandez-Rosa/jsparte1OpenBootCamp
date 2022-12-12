class Persona {
    nombre;
    edad;
    idDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.idDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}

const nueva_persona = new Persona("Adrián", 30, true);
console.log(nueva_persona);

nueva_persona.saludo();

let numero = 60;

let persona_2 = new Persona("Maria", 34, false); // instanciación

// instanceof -> similar a typeof pero para clases

console.log(typeof persona_2);
console.log(persona_2 instanceof Persona); // true





