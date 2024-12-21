import debug from 'debug';

const logger = {
  info: debug('peopay:info'),
  error: debug('peopay:error'),
  warn: debug('peopay:warn'),
  debug: debug('peopay:debug'),
};

export function logError(error: unknown, context?: string) {
  if (error instanceof Error) {
    logger.error(`${context ? `[${context}] ` : ''}${error.message}`);
    logger.debug(error.stack);
  } else {
    logger.error(`${context ? `[${context}] ` : ''}Unknown error:`, error);
  }
}

export function logInfo(message: string, data?: unknown) {
  logger.info(message, data);
}

export function logWarning(message: string, data?: unknown) {
  logger.warn(message, data);
}

export function logDebug(message: string, data?: unknown) {
  logger.debug(message, data);
}

export default logger;