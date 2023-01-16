import { StatusInfo } from "./constants"; 
import { ModelPluginType } from "../../types";
import _ from "lodash";

export {
  StatusInfo
}

export const StatusPlugin: ModelPluginType = (ctx) => {

  // Setup default status
  ctx.attributes["status"] = StatusInfo[0];

  ctx.methods.getStatus = function () {
    if(ctx.relatedModels.length === 0){
      return ctx.attributes["status"];
    }

    const relatedItemsStatuses = _.map(ctx.relatedModels, function(item){
      const itemStatus = item.attributes["status"];
      
      if(!itemStatus){
        return;
      }

      return item.methods.getStatus();
    })

    return _.minBy(
      [ctx.attributes["status"], ...relatedItemsStatuses],
      function (status) { 
        return status.ranking; 
      })
  };

  // Установка статуса производится по ранкингу
  ctx.methods.setStatus = function (ranking) {
    if (!StatusInfo[`${ranking}`]) {
      // TODO: add error response
      console.log("ошибка установки статуса: такого статуса не существует.")
      ctx.attributes["status"] = StatusInfo[0];
    }
    ctx.attributes["status"] = StatusInfo[`${ranking}`];
  };
}
