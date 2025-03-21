import logger from "../config/logger";

type LoggerServiceDependencies = {
  logger: typeof logger;
}

export interface ILoggerMixin {
  loggerInfo(message: string, data?: any): void;
  loggerErro(message: string, data?: any): void;
}

export function LoggerMixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    private logger: typeof logger | undefined;

    constructor(...args: any[]) {
      super(...args);
    }

    loggerInfo(message: string, data?: any) {
      return this.logger?.info(message, data);
    }

    loggerErro(message: string, data?: any) {
      return this.logger?.error(message, data);
    }
  };
}