export interface ILoggerTransport {
  info: (msg: string) => void,
  warn: (msg: string) => void,
  error: (msg: string) => void,
}

export interface ILoggerCreateOptions {
  transport: ILoggerTransport
}


export interface ILoggerInstance {
  info: (msg: string) => void,
  warn: (msg: string) => void,
  error: (msg: string) => void,
}

export interface ILogger {
  _instance: ILoggerInstance | null,
  _transport: ILoggerTransport | null,
  _info: (msg: string) => void,
  _warn: (msg: string) => void,
  _error: (msg: string) => void,
  _createMessage: (logType:LoggerLogTypeEnum,  msg: string) => void
  _createInstance: (props: ILoggerCreateOptions) => ILoggerInstance
  create: (props: ILoggerCreateOptions) => ILoggerInstance,
}

export const enum LoggerLogTypeEnum {
  "INFO" = "info",
  "WARN" = "warn",
  "ERROR" = "error",
}
