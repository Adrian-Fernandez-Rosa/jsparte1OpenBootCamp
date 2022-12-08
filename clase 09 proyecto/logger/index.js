const winston = require('winston');

const logger2 = winston.createLogger({
  // level: 'info',
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    /* los levels estan en la documentación de winston 
    */
    new winston.transports.File({ filename: 'combined.log' }),
    // podemos crear uno nuevo
   new winston.transports.Console(),
  ],
});

module.exports = logger2;