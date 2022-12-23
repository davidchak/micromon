import { ModelBuilder } from "./builder"
import { BaseModelType, ModelTypesEnum } from "./types";

const BaseStore = () => {
  const _state: BaseModelType[] = [];

  const _proxyState = new Proxy(_state, {
    get(target, value, receiver) {
      return Reflect.get(target, value, receiver);
    },

    set(target, prop, value, receiver) {
      return Reflect.set(target, prop, value, receiver);
    },
  });

  return {
    add: function(model: BaseModelType){
      if(!_proxyState.includes(model)){
        _proxyState.push(model)
      }
      return;
    },
    get: function(id: BaseModelType["attributes"]["id"]){
      return _proxyState.find(model => model.attributes.id == id);
    },
    info: function(){
      return console.log(JSON.stringify(_proxyState, null, 2))
    }
  };
};


const store = BaseStore();

const node1 = ModelBuilder().build(ModelTypesEnum.NODE);
store.add(node1);

const application1 = ModelBuilder().build(ModelTypesEnum.APPLICATION);
store.add(application1);

node1.addRelation(application1);

store.info()
