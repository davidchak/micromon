"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleTransport = void 0;
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
const ConsoleTransport = () => {
    const _createLoggerText = function (level, msg) {
        return `%c${level} %c${new Date().toISOString()} %c${JSON.stringify(msg)}`;
    };
    const _createStyle = function (level) {
        return Style.base.join(";") + ";" + Style[level].join(";") + ";";
    };
    const info = function (msg) {
        console.log(_createLoggerText("info" /* LoggerLogTypeEnum.INFO */, msg), _createStyle("info" /* LoggerLogTypeEnum.INFO */));
    };
    const warn = function (msg) {
        console.log(_createLoggerText("warn" /* LoggerLogTypeEnum.WARN */, msg), _createStyle("warn" /* LoggerLogTypeEnum.WARN */));
    };
    const error = function (msg) {
        console.log(_createLoggerText("error" /* LoggerLogTypeEnum.ERROR */, msg), _createStyle("error" /* LoggerLogTypeEnum.ERROR */));
    };
    return {
        info,
        warn,
        error
    };
};
exports.ConsoleTransport = ConsoleTransport;
