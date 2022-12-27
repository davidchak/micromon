import { ILogger, ILoggerCreateOptions, LoggerLogTypeEnum } from "./types";

export const Logger: ILogger = {
  _instance: null,
  _transport: null,

  _createMessage: function (logType: LoggerLogTypeEnum, msg: string){
    if(!this._transport){
      // TODO: добавить вывод ошибки
      return;
    }

    this._transport[logType](msg);
  },

  _info: function(msg: string){
    this._createMessage(LoggerLogTypeEnum.INFO, msg)
  },

  _warn: function(msg: string){
    this._createMessage(LoggerLogTypeEnum.WARN, msg)
  },

  _error: function(msg: string){
    this._createMessage(LoggerLogTypeEnum.ERROR, msg)
  },

  _createInstance: function (options: ILoggerCreateOptions) {
    this._transport = options.transport;

    return {
      info: this._info,
      warn: this._warn,
      error: this._error,
    }
  },
  
  create: function (options: ILoggerCreateOptions) {
    if(!this._instance){
      this._instance = this._createInstance(options);
    }
    
    return this._instance;
  },
};

