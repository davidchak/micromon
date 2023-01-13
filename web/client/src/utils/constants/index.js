import { version } from "@root/packages.json"

export const applicationConstants = {
  "APP_NAME": "MicroMon",
  "APP_VERSION": version,
}

export const zIndexConstants = {
  "NOTIFICATION": 1000,
  "MODAL": 900,
  "HEADER-MENU": 800,
  "SIDE-MENU": 700,
}

export const statusNameConstants = {
  "ERROR": "error",
  "CRITICAL": "critical",
  "WARNING": "warning",
  "SHUTDOWN": "shutdown",
  "DISABLED": "disabled",
  "OTHER": "other",
  "SUCCESS": "success",
}

export const statusRankingConstants = {
  "ERROR": "100",
  "CRITICAL": "200",
  "WARNING": "300",
  "SHUTDOWN": "400",
  "DISABLED": "500",
  "OTHER": "600",
  "SUCCESS": "700",
}
