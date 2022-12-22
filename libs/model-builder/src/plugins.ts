import { ModelPluginType } from "./types";

export const StatusInfo = {
  0: {
    color: "black",
    ranking: 0,
    description: "other"
  },
  100: {
    color: "darkred",
    ranking: 100,
    description: "error"
  },
  200: {
    color: "grey",
    ranking: 200,
    description: "down"
  },
  300: {
    color: "red",
    ranking: 300,
    description: "critical"
  },
  400: {
    color: "yellow",
    ranking: 400,
    description: "warning"
  },
  500: {
    color: "green",
    ranking: 500,
    description: "up"
  },
}

export const LoggerPlugin: ModelPluginType = (ctx) => {
  ctx.methods.log = function (msg) {
    console.log(JSON.stringify({
      level: "INFO",
      msg: msg,
      timestamp: new Date(),
      object: ctx,
    }, null, 2))
  }
}

export const StatusPlugin: ModelPluginType = (ctx) => {
  // Setup default status
  ctx.attributes["status"] = StatusInfo[0];
  
  ctx.methods.getStatus = function () {
    if (!ctx.attributes["status"]) {
      // TODO: add error response
      console.log("у этого объекта нет статуса");
      return null;
    }
    return ctx.attributes["status"];
  };

  ctx.methods.setStatus = function (ranking) {
    if (!StatusInfo[`${ranking}`]) {
      // TODO: add error response
      console.log("ошибка установки статуса: такого статуса не существует.")
      ctx.attributes["status"] = StatusInfo[0];
    }
    ctx.attributes["status"] = StatusInfo[`${ranking}`];
  };
}
