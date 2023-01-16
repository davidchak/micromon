import { ModelPluginType } from "../../types";
import _ from "lodash";


export const InfoPlugin: ModelPluginType = (ctx) => {
  ctx.methods.getInfo = function(){
    return {
      ...ctx.attributes,
      include: _.map(ctx.relatedModels, function(item){
        return item.methods.getInfo();
      })
    }
  }
}
