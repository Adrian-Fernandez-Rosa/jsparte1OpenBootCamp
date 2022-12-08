const logger2 = require('winston')
/* Nos puede interesar tener un log, para eso
    instalamos npm install winston
*/



// logger.log("Hola estoy saliendo por pantalogger"); .log no esta en winston
logger2.info("Hola esto es un mensaje informativo");
logger2.debug("Esto es un mensaje de debu");
logger2.warn("Esto es un mensaje de advertencia");
logger2.error("Esto es un error");