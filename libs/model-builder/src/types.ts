export type ModelPluginType = (ctx: BaseModelType) => void; 

export const enum ModelTypesEnum {
  NODE = "node",
  INTERFACE = "interface",
  VOLUME = "volume",
  APPLICATION = "application",
  METRICS = "metrics"
}

export type ModelBaseAttributesType = {
  id: string,
  name: string,
  type: string
}

export type ModelAttributesType = ModelBaseAttributesType | Record<string, any>;

export type ModelCompatibilityType = ModelTypesEnum[];

export type ModelMethodsType = Record<string, (args?: any) => any|void>;


export type ModelRelatedItems = Record<string, BaseModelType>;

export type BaseModelType = {
  plugins: ModelPluginType[],
  attributes: ModelAttributesType,
  compatibility: ModelCompatibilityType,
  relatedModels: ModelRelatedItems,
  methods: ModelMethodsType,
  addPlugin: (plugin: ModelPluginType) => void;
}
