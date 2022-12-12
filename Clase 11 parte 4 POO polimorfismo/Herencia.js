class Persona {
    _nombre;
    _edad; //atributos protected 
    constructor(nombre, edad, isDeveloper){
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`);
    }


}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }

    saludo() {
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`)
    }


}

const nuevoDev = new Desarrollador("Adrian", 30, "Java");
console.log(nuevoDev);
nuevoDev.saludo();

// Polimorfismo => Varias formas.