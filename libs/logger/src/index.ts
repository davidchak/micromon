import { Logger } from "./instance";
import { ConsoleTransport } from "./transports/console"; 

import type { ILogger } from "./types";

export default {
  Logger,
  ConsoleTransport
}

export type {
  ILogger
}
