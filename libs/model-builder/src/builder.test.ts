import { ModelBuilder, ModelTypesEnum } from "./builder";

test("Create new model", () => {
    const nodeModel = ModelBuilder().build("node-test", ModelTypesEnum.NODE);

    expect(nodeModel).toHaveProperty("attributes");
    expect(nodeModel).toHaveProperty("compatibility");
    expect(nodeModel).toHaveProperty("nestedItems");
    expect(nodeModel).toHaveProperty("methods");
})


