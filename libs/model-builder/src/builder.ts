import { generateNewId } from "./helpers"; 
import { BaseModelType, ModelTypesEnum } from "./types";


export const ModelBuilder = function(){
  const _state: BaseModelType = {
    plugins: [],
    attributes: new Proxy({}, {
      get(target, value, receiver) {
        if (!Reflect.has(target, value)) {
          return undefined;
        }
        return Reflect.get(target, value, receiver);
      },

      set(target, prop, value, receiver){
        return Reflect.set(target, prop, value, receiver);
      }
    }),
    methods: {},
    relatedModels: new Proxy([], {
      get(target, value, receiver) {
        if (!Reflect.has(target, value)) {
          return undefined;
        }
        return Reflect.get(target, value, receiver);
      },

      set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
    }),
    compatibility: [],
    addPlugin: function (plugin) {
      this.plugins.push(plugin.name)
      plugin(this);
    },

    addRelation: function(modelInstance){
      
      this.relatedModels.push(modelInstance)
      
      // const { attributes } = modelInstance;
      // this.relatedModels.push({
      //   id: attributes["id"],
      //   type: attributes["type"],
      // });
    },
    addAttribute: function(prop, value){
      if(this.attributes[prop]){
        console.log("ключ уже находится в объекте")
        return;
      }

      this.attributes[prop] = value;
    }
  };

  const _createId = (prefix) => {
    return `${prefix}_${generateNewId()}`;
  };

  const build = (type: ModelTypesEnum) => {
    _state.attributes["id"] = _createId(type);
    // TODO: реализовать создание модели на основе заготовки
    _state.attributes["type"] = type;
    return _state;
  };

  // TODO: Реализовать метод клонирования объекта
  // const clone = (newName, instance) => {
  //   return _state;
  // };
  
  return {
    build,
    // clone
  }
}
