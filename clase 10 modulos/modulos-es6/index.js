// import { suma, nombre } from './modulos/matematicas.js'
// si quisieramos importar todo: 
import * as moduloMatematicas from './modulos/matematicas.js'
// const sum;
import getAutor, {libro} from './modulos/literatura.js';

const sum = moduloMatematicas.suma(4, 12);

console.log(sum);

console.log(getAutor());
console.log(libro)

console.log(moduloMatematicas.nombre);
