import { genId } from "../constant";

export const loggerCreator = {
  _instance: null,

  _createLoggerText: function (level, msg) {
    return JSON.stringify({
      level,
      datetime: new Date(),
      msg,
    })
  },

  _info: function (msg) {
    console.info(
      this._createLoggerText("INFO", msg)
    );
  },

  _warn:  function (msg){
    console.warn(
      this._createLoggerText("WARN", msg)
    );
  },

  _error: function (msg) {
    console.error(
      this._createLoggerText("ERROR", msg)
    );
  },

  _createInstance: function () {
    return {
      id: genId(),
      info: this.info,
      warn: this.warn,
      error: this.error
    }
 },
 
  getInstance: function () {
    if(!this._instance){
      this._instance = this._createInstance();
    }
    
    return this._instance;
  },
};

