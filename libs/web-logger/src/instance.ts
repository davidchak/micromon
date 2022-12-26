import { genId } from "../constant";
import { ILoggerCreator } from "./types";

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

export const loggerCreator: ILoggerCreator = {
  _instance: null,

  _createLoggerText: function (level, msg) {
    return `%c${level} %c${new Date().toISOString()} %c${ JSON.stringify(msg)}`
  },

  _createStyle: function(level){
    return Style.base.join(";") + ";" + Style[level].join(";") + ";";
  },

  _info: function (msg) {
    console.log(
      this._createLoggerText("INFO", msg),
      this._createStyle("INFO")
    );
  },

  _warn:  function (msg){
    console.log(
      this._createLoggerText("WARN", msg),
      this._createStyle("WARN")
    );
  },

  _error: function (msg) {
    console.log(
      this._createLoggerText("ERROR", msg),
      this._createStyle("ERROR")
    );
  },

  _createInstance: function () {
    return {
      id: genId(),
      info: this._info,
      warn: this._warn,
      error: this._error
    }
 },
 
  getInstance: function () {
    if(!this._instance){
      this._instance = this._createInstance();
    }
    
    return this._instance;
  },
};

