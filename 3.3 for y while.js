for( let x= 0; x < 10; x++){
    console.log(x);
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

// break y continue
let lista1 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista1.length; i++){

    if (lista1[i] === 3){
        continue;
    }

    console.log(lista1[i]);

    if(lista1[i] > 5){
        break;
    }

}

// labels (etiquetas en bucles).


let unidades = 0;
let decenas = 0;

bucleDecenas: while (true){
    

   bucleUnidades: while(true) {
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++;
        if(unidades === 10) {
            unidades = 0;
            break bucleUnidades;
        }
        if(decenas ===2){
            break bucleDecenas;
        }
    }
    decenas++;
   

}