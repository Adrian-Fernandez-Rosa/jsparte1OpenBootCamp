const persona = { 
    nombre: "Adrián",
    edad: 30,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
}

console.log(persona);

persona.saludo();

const otra_persona = {
    nombre: "Sola",
    edad: 18,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola');
    }
}

// todo lo anterior esta mal porque repite código. 
// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria", 44, false);

// Existe otra forma profesional que es con POO