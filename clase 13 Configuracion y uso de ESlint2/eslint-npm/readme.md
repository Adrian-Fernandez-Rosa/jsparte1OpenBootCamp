npm install eslint –save-dev : Cuando se usa –save-dev con npm install, significa que el paquete es una dependencia de desarrollo. Una dependencia de desarrollo es cualquier paquete cuya ausencia no afectará el trabajo de la aplicación. En el archivo package.json en la sección devDependencies contiene la lista de todas las dependencias de desarrollo. Cuando alguien instala su paquete, no instalará ninguna dependencia de desarrollo, pero si clona el repositorio, también instalará todas las dependencias de desarrollo. Ejemplo: nodemon

luego de instalar eslint como dev 

poner npm init @eslint/config

si queremos que analice todos los archivos  en el package.son scripts poner 

 "lint": "eslint ."

 y luego en consola ejecutamos el script con npm run lint y nos mostrara los errores y warnings

 También hay que crear el script de fix 
   "lint-fix": "eslint --fix ."