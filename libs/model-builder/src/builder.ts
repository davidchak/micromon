export const enum ModelTypesEnum {
  "NODE",
  "INTERFACE",
  "VOLUME",
  "APPLICATION",
  "METRICS"
}

export type ModelBaseAttributesType = {
  id: string,
  name: string,
  type: string
}

export type ModelAttributesType = ModelBaseAttributesType | Record<string, any>;

export type ModelCompatibilityType = ModelTypesEnum[];

export type ModelMethodsType = Record<string, (args: unknown) => void>;

export type BaseModelType = {
  // relations: {},
  attributes: ModelAttributesType,
  compatibility: ModelCompatibilityType,
  nestedItems: BaseModelType[],
  methods: ModelMethodsType,
}


export const ModelBuilder = () => {
  const _state: BaseModelType = {
    attributes: {},
    compatibility: [],
    nestedItems: [],
    methods: {}
  };

  const _createId = (prefix) => {
    return {id:`${prefix}_${Math.round(Math.random()*100000)}`};
  };

  const _mapAttributes = (name: string, type: ModelTypesEnum) => {
    _state.attributes = {
      ..._createId(type),
      name,
      type
    }
    return _state;
  }

  const build = (name, type) => {
    _mapAttributes(name, type)
    return _state;
  };

  const clone = (newName, instance) => {
    return _state;
  };
  
  return {
    build,
    clone
  }
}
