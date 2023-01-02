import { Logger } from "../src/core/instance";
import { WebConsoleTransport } from "../src/transports/web-console";
import { ILoggerInstance } from "../src/types";


describe("Console logger test", () => {
  let logger: ILoggerInstance;

  beforeAll(() => {
    logger = Logger().create({
      transport: WebConsoleTransport()
    })
  })

  test("Test new NODE model", () => {
    expect(logger).toBeTruthy();
    expect(logger).toHaveProperty("info");
    expect(logger).toHaveProperty("warn");
    expect(logger).toHaveProperty("error");

    logger.info("Info");
    logger.warn("Warn");
    logger.error("Error");

    // expect(logger.info).toBeCalled();
    // expect(logger.warn).toBeCalled();
    // expect(logger.error).toBeCalled();
  })
})
