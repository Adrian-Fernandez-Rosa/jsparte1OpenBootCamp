/*
Una función asíncronicas:
La palabra asincronía 
significa que no sucede al mismo tiempo. ¿Qué significa esto en el contexto de JavaScript?
Por lo general, la ejecución de cosas secuencialmente funciona bien. Sin embargo, a veces puede que necesites 
tomar datos de un servidor o retrasar la ejecución de una función, algo que no prevés que ocurra

Bajo estas circunstancias, es posible que no quieras que el motor de JavaScript detenga 
la ejecución de otro código secuencial.
 Para ello, el motor de JavaScript necesita manejar las cosas un poco más eficientemente en este caso.

 Podemos clasificar la mayoría de las operaciones asíncronas de JavaScript de 2 maneras:

 1. Eventos o funciones Browser API/Web API. Estos incluyen métodos como setTimeout,
  o controladores de eventos como clic, mouse over, scroll y muchos más.
2. 
Promesas. Un objeto único en JavaScript que nos permite realizar operaciones asíncronas.


*/ 


function miAsinc() {
    // Hace una llamada a base de datos externa
    // esto puede dar algún Error

}

const miPromesa = new Promise((resolve, reject) => {
    // Si está todo correcto

    const i = Math.floor(Math.random() *2)
    if (i !== 0){
        resolve();
    } else {
        reject();
    }
})


miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("me ejecutare siempre"))
    
    