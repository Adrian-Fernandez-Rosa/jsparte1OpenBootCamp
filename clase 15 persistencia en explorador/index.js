// localStorage.setItem("nombre","Adrián")
// localStorage.setItem("nombre", "Homero")


console.log(localStorage.getItem("nombre"))

//localStorage.setItem("persona", { "nombre": "Adrian", "edad": 30})

// Para guardar un objeto hay que serializarlo

localStorage.setItem("persona", JSON.stringify({ "nombre": "Adrian", "edad": 30}))

console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// json.parse -> Convierte un objeto/array convertido 
// a través de stringify en un objeto de javascript

//Eliminar de localstorage 

localStorage.removeItem("nombre")

// SESION STORAGE  

sessionStorage.setItem("nombre-sesion", "Adrián")

// COOKIES 

console.log(document.cookie)
document.cookie = "nombreCookie=AdrianCookie";
console.log("2"+document.cookie)

document.cookie= "nombreCaducidad=Nombre;expires="+ new Date(2023, 0, 1).toUTCString()

console.log("3"+document.cookie)