# Utilizando módulos con ES6

 paso 1:

 npm init

 en el package.json se agrego:

   "type": "module",

paso 3:
agregar export antes de las funciones, ejemplo:

export function multiplica(a, b){
    return a * b;
}