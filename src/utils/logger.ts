import winston, { transports } from 'winston';

var logger: winston.Logger;

const createLogger = function createLogger() {
  if (!logger) {
    logger = winston.createLogger({
      level: 'info',
      transports: [
        new transports.Console({
          level: 'info',
          handleExceptions: true,
        }),
      ],
      exitOnError: false,
    });
  }

  return logger;
};

export default createLogger;
