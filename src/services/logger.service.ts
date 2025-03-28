import logger from "../config/logger";

type LoggerServiceDependencies = {
  logger: typeof logger;
}

export interface ILoggerMixin {
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}

export function LoggerMixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    private logger: typeof logger | undefined;

    constructor(...args: any[]) {
      super(...args);
      const params = args[0] as LoggerServiceDependencies;
      this.logger = params?.logger;
    }

    loggerInfo(message: string, data?: unknown) {
      return this.logger?.info(message, data);
    }

    loggerErro(message: string, data?: unknown) {
      return this.logger?.error(message, data);
    }
  };
}