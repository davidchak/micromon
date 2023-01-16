import { ModelBuilder } from "./builder";
import { BaseModelType, ModelTypesEnum } from "./types";
import { StatusPlugin, StatusInfo } from "./plugins/status";


describe("Model builder test", () => {
  let nodeModel: BaseModelType;
  let appModel: BaseModelType;
  
  beforeEach(() => {
    nodeModel = ModelBuilder().build(ModelTypesEnum.NODE);
    appModel = ModelBuilder().build(ModelTypesEnum.APPLICATION);
  });

  test("Test new NODE model", () => {
    expect(nodeModel).toBeTruthy();
    expect(nodeModel).toHaveProperty("attributes");
    expect(nodeModel).toHaveProperty("plugins");
    expect(nodeModel).toHaveProperty("compatibility");
    expect(nodeModel).toHaveProperty("relatedModels");
    expect(nodeModel).toHaveProperty("methods");
    expect(nodeModel).toHaveProperty("addPlugin");
  })

  test("Test new APPLICATION model", () => {
    expect(appModel).toBeTruthy();
    expect(appModel).toHaveProperty("attributes");
    expect(appModel).toHaveProperty("plugins");
    expect(appModel).toHaveProperty("compatibility");
    expect(appModel).toHaveProperty("relatedModels");
    expect(appModel).toHaveProperty("methods");
    expect(appModel).toHaveProperty("addPlugin");
  })

  test("Test relation between NODE and APPLICATION", () => {
    nodeModel.addRelation(appModel);
    
    expect(nodeModel.relatedModels).toContain(appModel);
  })

  test("Test StatusPlugin", () => {
    nodeModel.addPlugin(StatusPlugin);

    expect(nodeModel.plugins).toContain("StatusPlugin");

    appModel.addPlugin(StatusPlugin);
    
    expect(appModel.plugins).toContain("StatusPlugin");

    // Test NODE default status
    expect(nodeModel.methods).toHaveProperty("getStatus");
    
    const nodeDefaultStatus = nodeModel.methods.getStatus();
    
    expect(nodeDefaultStatus).toEqual(StatusInfo[0]);

    // Test APPLICATION default status
    expect(appModel.methods).toHaveProperty("getStatus");
    
    const appDefaultStatus = appModel.methods.getStatus();
    
    expect(appDefaultStatus).toEqual(StatusInfo[0]);

    // Test status setup
    expect(nodeModel.methods).toHaveProperty("setStatus");
    
    nodeModel.methods.setStatus(300);
    const newNodeStatus = nodeModel.methods.getStatus();
    
    expect(newNodeStatus).toEqual(StatusInfo[300]);

    // Test status setup
    expect(appModel.methods).toHaveProperty("setStatus");
    
    appModel.methods.setStatus(200);
    const newAppStatus = appModel.methods.getStatus();
    expect(newAppStatus).toEqual(StatusInfo[200]);

    // Test worst status;
    nodeModel.addRelation(appModel);
    console.log(nodeModel.attributes["status"])
    console.log(nodeModel.relatedModels.map(item => item.methods.getStatus()))

    const newNodeStatusAfterAddRelation = nodeModel.methods.getStatus();
    expect(newNodeStatusAfterAddRelation).toEqual(StatusInfo[200]);
    
  })
})
