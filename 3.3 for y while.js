for( let i= 0; i < 10; i++){
    console.log(i);
}


let lista = [1, 4, 6, 10, 12];

// Estructura for ... of

for ( let valor of lista){
    console.log(valor);
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor);
})


let persona = {
    nombre: "Adrián",
    apellido: "Fernández",
    edad: 30,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]) //accede a cada valor
}