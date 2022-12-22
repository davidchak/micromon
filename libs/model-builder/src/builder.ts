import { generateNewId } from "./helpers"; 
import { BaseModelType,  } from "./types";


export const ModelBuilder = function(){
  const _state: BaseModelType = {
    plugins: [],
    attributes: new Proxy({}, {
      get(target, value) {
        if (!target[value]) {
          return undefined;
        }
        return target[value];
      }
    }),
    methods: {},
    relatedModels: new Proxy({}, {}),
    compatibility: [],
    addPlugin: function (plugin) {
      plugin(this);
    }
  };

  const _createId = (prefix) => {
    return `${prefix}_${generateNewId()}`;
  };



  const build = (type) => {
    _state.attributes["id"] = _createId(type);
    return _state;
  };

  // const clone = (newName, instance) => {

  //   return _state;
  // };
  
  return {
    build,
    // clone
  }
}
