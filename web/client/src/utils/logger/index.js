import { Logger, WebConsoleTransport } from "@micromon/logger";

const logger = Logger().create({
  transport: WebConsoleTransport()
})

export default logger;
