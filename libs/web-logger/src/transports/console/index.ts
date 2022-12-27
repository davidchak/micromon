import { ConsoleLoggerTransport } from "./types";
import { LoggerLogTypeEnum } from "../../types";

const Style = {
  base: [
    "color: #eee",
    "padding: 2px 4px",
    "border-radius: 2px"
  ],

  INFO: [
    "color: #fff",
    "background-color: blue",
  ],
  
  WARN: [
    "background-color: yellow",
  ],

  ERROR: [
    "background-color: red",
  ]
};

export const ConsoleTransport: ConsoleLoggerTransport = () => {
  
  const _createLoggerText = function (level: LoggerLogTypeEnum, msg: string) {
    return `%c${level} %c${new Date().toISOString()} %c${ JSON.stringify(msg)}`
  };

  const _createStyle = function (level: LoggerLogTypeEnum){
    return Style.base.join(";") + ";" + Style[level].join(";") + ";";
  };

  const info = function (msg) {
    console.log(
      _createLoggerText(LoggerLogTypeEnum.INFO, msg),
      _createStyle(LoggerLogTypeEnum.INFO)
    );
  };

  const warn = function (msg){
    console.log(
      _createLoggerText(LoggerLogTypeEnum.WARN, msg),
      _createStyle(LoggerLogTypeEnum.WARN)
    );
  };

  const error = function (msg) {
    console.log(
      _createLoggerText(LoggerLogTypeEnum.ERROR, msg),
      _createStyle(LoggerLogTypeEnum.ERROR)
    );
  };

  return {
    info,
    warn,
    error
  }
};

