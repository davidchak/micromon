import { ModelBuilder } from "./builder"; 
import { ModelTypesEnum } from "./types";
import { StatusPlugin } from "./plugins/status";
import { InfoPlugin } from "./plugins/info";

const node1 = ModelBuilder().build(ModelTypesEnum.NODE);
node1.addAttribute("name", "node1");
node1.addAttribute("admin", "иванов ии");
node1.addPlugin(StatusPlugin);
node1.addPlugin(InfoPlugin);
node1.methods.setStatus(500);
// console.log(node1);

const app1 = ModelBuilder().build(ModelTypesEnum.APPLICATION);
app1.addAttribute("name", "app1");
app1.addPlugin(StatusPlugin);
app1.addPlugin(InfoPlugin);
app1.methods.setStatus(500);


const app2 = ModelBuilder().build(ModelTypesEnum.APPLICATION);
app2.addAttribute("name", "app2");
app2.addPlugin(StatusPlugin);
app2.addPlugin(InfoPlugin);
app2.methods.setStatus(500);


const metrick1 = ModelBuilder().build(ModelTypesEnum.METRICS);
metrick1.addAttribute("name", "metrick1");
metrick1.addPlugin(StatusPlugin);
metrick1.addPlugin(InfoPlugin);
metrick1.methods.setStatus(400);

const metrick2 = ModelBuilder().build(ModelTypesEnum.METRICS);
metrick2.addAttribute("name", "metrick2");
metrick2.addPlugin(StatusPlugin);
metrick2.addPlugin(InfoPlugin);
metrick2.methods.setStatus(500);


node1.addRelation(app1);
node1.addRelation(app2);

app1.addRelation(metrick1);
app2.addRelation(metrick2);

console.log(node1.methods.getStatus());
console.log(node1.methods.getInfo());
// console.log(JSON.stringify(node1, null, 2))
