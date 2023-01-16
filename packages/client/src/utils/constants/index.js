import packageJson from "../../../package.json"

export const applicationConstants = {
  "APP_NAME": "MicroMon",
  "APP_VERSION": packageJson.version,
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

export const apiConstants = {
  // TODO: заменить на свой api 
  "API_BASE_URL": "https://jsonplaceholder.typicode.com",
  "API_VERSION": "v1",
  "API_LOGIN_URL": "/users",
  "API_LOGOUT_URL": "/users"
}

export const routesConstants = {
  "MAIN_ROUTE": "/",
  "AUTH_ROUTE": "/auth",
  "AUTH_LOGIN_ROUTE": "/auth/login",
  "AUTH_REGISTER_ROUTE": "/auth/register",
  "VIEWER_ROUTE": "/view",
  "EDITOR_ROUTE": "/editor",
  "SETTINGS_ROUTE": "/settings",
}

export const userPermissionsConstant = {
  "USER_IS_LOGGED": false,
  "USER_CAN_READ": false,
  "USER_CAN_EDIT": false,
}

export const editorConstant = {
  "EDIT_MODE_IS_ACTIVE": false,
  "AUTOSAVE_IS_ACTIVE": false,
}
