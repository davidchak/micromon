export interface ILoggerInstance {
  id: string,
  info: (msg: string) => void,
  warn: (msg: string) => void,
  error: (msg: string) => void,
}

export interface ILoggerCreator {
  _instance: ILoggerInstance | null,
  _createLoggerText: (level: string, msg: string) => string,
  _createStyle: (level: string) => string,
  _info: (msg: string) => void,
  _warn: (msg: string) => void,
  _error: (msg: string) => void,
  _createInstance: () => ILoggerInstance
  getInstance: () => ILoggerInstance,
}
