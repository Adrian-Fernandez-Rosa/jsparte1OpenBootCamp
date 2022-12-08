const miFuncion = val => {
    if ( typeof val === "number"){
        return 2 * val;
    }
   
    throw new Error("El valor debe ser de tipo número")
};

// console.log(miFuncion("2")); //Error

// const elDoble = miFuncion("ala");

const numero = 8;

try {
    console.log("Está ejecutándose de manera correcta");
    const doble = miFuncion("numero")
    console.log(doble)
} catch(e) {
    console.log("Error! "+e);
} finally {
    console.log("Esto se va a ejecutar tanto se produce algún error, como si no existiera ninguno")
}

// errores

// InternalErro, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
