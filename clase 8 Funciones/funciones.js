// Que son las funciones, cómo se declaran y cómo se utilizan

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar();

const nom = "Adrian";

saludar(nom);

let nombre_2 = "Juan"

despedir(nombre_2)
function despedir(nombre){
    console.log(`Hola ${nombre}`)
}

let persona = {nombre: "Adrián", apellido: "Fernández"}

function saludarPersona(objeto){
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

console.log(saludarPersona(persona));


function suma(... nums) {
    return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 9, 15, 16);

console.log(s);

