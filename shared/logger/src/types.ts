export const enum LoggerLogTypeEnum {
  "INFO" = "info",
  "WARN" = "warn",
  "ERROR" = "error",
}

export interface ILoggerTransportMsg {
  text: string;
  timestamp: Date;
  // info?: any;
}

export interface ILoggerTransport {
  info: (args: ILoggerTransportMsg) => void,
  warn: (args: ILoggerTransportMsg) => void,
  error: (args: ILoggerTransportMsg) => void,
}

export interface ILoggerOptions {
  transport: ILoggerTransport
}

export interface ILoggerInstance {
  info: (msg: string) => void,
  warn: (msg: string) => void,
  error: (msg: string) => void,
}

export interface ILoggerCreate {
  create: (options: ILoggerOptions) => ILoggerInstance
} 

export type LoggerType = () => ILoggerCreate; 

