const boton = document.querySelector("#btn");

console.log(boton);

boton.addEventListener("click", () => {
  //  alert("se ha hecho click")
  confirm("¿Estás de acuerdo?") ? console.log("OK") 
 : console.log("NO");

 

})

const botonInfo = document.querySelector("#info");

botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre");
    if(nombre){
    console.log("Tu nombre es "+ nombre)
}else {
    console.log("No pusiste nombre")
}
})

const lista = [{
    nombre: "adrian",
    edad: 30
}, { 
    nombre: "Julian",
    edad:35
},{ 
    nombre: "Amelia",
    edad: 33
} 

]

// console.log(lista)

console.table(lista);