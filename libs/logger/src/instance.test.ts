import { Logger } from "./instance";
import { ConsoleTransport } from "./transports/console";
import { ILoggerInstance } from "./types";


describe("Console logger test", () => {
  let logger: ILoggerInstance;

  beforeAll(() => {
    logger = Logger.create({
      transport: ConsoleTransport()
    })
  })

  test("Test new NODE model", () => {
    expect(logger).toBeTruthy();
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");
  })
})
