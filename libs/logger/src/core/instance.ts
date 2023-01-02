import { LoggerType, ILoggerOptions, ILoggerTransport, LoggerLogTypeEnum } from "../types";

export const Logger: LoggerType = () => {
  let transport: ILoggerTransport;

  const sendMessage = function(level: LoggerLogTypeEnum, msg: string){
    if(!transport){
      throw new Error("Не найден транспорт для отправки сообщения")
    }

    return transport[level]({
      text: msg,
      timestamp: new Date()
    });
  }

  const info = function(msg: string){
    sendMessage(LoggerLogTypeEnum.INFO, msg);
  }

  const warn = function(msg: string){
    sendMessage(LoggerLogTypeEnum.WARN, msg);
  }

  const error = function(msg: string){
    sendMessage(LoggerLogTypeEnum.ERROR, msg);
  }

  const create = function (options: ILoggerOptions){
    
    if(!options.transport){
      throw new Error("Не передан транспорт для сообщений");
    }

    transport = options.transport;

    return {
      info,
      warn,
      error
    }
  }

  return {
    create
  }
};

