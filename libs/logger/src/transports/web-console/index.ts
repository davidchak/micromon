import { LoggerLogTypeEnum , ILoggerTransport, ILoggerTransportMsg} from "../../types";

export const WebConsoleTransport = (): ILoggerTransport => {
  // TODO: Добавить внешние стили через входные пропсы
  // TODO: Поправить логику работы стилей так, чтобы они применялись ко всем данным 
  const styles = {
    base: [
      "color: #000",
      "padding: 2px 4px",
      "border-radius: 2px",
    ],

    info: [
      "background-color: blue",
      "text-transform: uppercase"
    ],

    warn: [
      "background-color: yellow",
      "text-transform: uppercase"
    ],

    error: [
      "background-color: red",
      "text-transform: uppercase"
    ]
  };

  const _createStyle = function (level: LoggerLogTypeEnum){
    const stylesString = styles.base.join(";") + ";" + styles[level].join(";") + ";";

    return stylesString;
  };

  const info = function (msg: ILoggerTransportMsg) {
    console.log(
      "%c%s",
      _createStyle(LoggerLogTypeEnum.INFO), 
      LoggerLogTypeEnum.INFO, 
      `[${msg.timestamp.toISOString()}]`, 
      msg.text
    );
  };

  const warn = function (msg: ILoggerTransportMsg){
    console.log(
      "%c%s",
      _createStyle(LoggerLogTypeEnum.WARN),
      LoggerLogTypeEnum.WARN, 
      `[${msg.timestamp.toISOString()}]`,
      msg.text
    );
  };

  const error = function (msg: ILoggerTransportMsg) {
    console.log(
      "%c%s",
      _createStyle(LoggerLogTypeEnum.ERROR),
      LoggerLogTypeEnum.ERROR,
      `[${msg.timestamp.toISOString()}]`,
      msg.text
    );
  };

  return {
    info,
    warn,
    error
  }
};

