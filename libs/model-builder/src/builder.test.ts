import { ModelBuilder } from "./builder";
import { BaseModelType, ModelTypesEnum } from "./types";
import { LoggerPlugin, StatusPlugin, StatusInfo } from "./plugins";


describe("Model builder test", () => {
  let nodeModel: BaseModelType;
  
  beforeEach(() => {
    nodeModel = ModelBuilder().build(ModelTypesEnum.NODE);
  });

  test("Test new model", () => {
    expect(nodeModel).toBeTruthy();
    expect(nodeModel).toHaveProperty("attributes");
    expect(nodeModel).toHaveProperty("plugins");
    expect(nodeModel).toHaveProperty("compatibility");
    expect(nodeModel).toHaveProperty("relatedModels");
    expect(nodeModel).toHaveProperty("methods");
    expect(nodeModel).toHaveProperty("addPlugin");
  })

  test("Test LogPlugin", () => {
    nodeModel.addPlugin(LoggerPlugin);
    expect(nodeModel.plugins).toContain("LoggerPlugin");
  })

  test("Test StatusPlugin", () => {
    nodeModel.addPlugin(StatusPlugin);
    expect(nodeModel.plugins).toContain("StatusPlugin");

    // Test default status
    expect(nodeModel.methods).toHaveProperty("getStatus");
    const defaultStatus = nodeModel.methods.getStatus();
    expect(defaultStatus).toEqual(StatusInfo[0]);
    
    // Test status setup
    expect(nodeModel.methods).toHaveProperty("setStatus");
    nodeModel.methods.setStatus(300);
    const newStatus = nodeModel.methods.getStatus();
    expect(newStatus).toEqual(StatusInfo[300]);
  })
})
