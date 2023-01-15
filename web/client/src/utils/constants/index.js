// import { version } from "@root/packages.json"

export const applicationConstants = {
  "APP_NAME": "MicroMon",
  // "APP_VERSION": version,
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

// export const actionNames = {
//   // User actions
//   "USER_LOGIN": "@user_login",
//   "USER_LOGOUT": "@user_logout",
  
//   // System actions
//   "SYSTEM_READY": "@system_ready",
  
//   // Interface actions
//   "OPEN_PROBLEMS_MENU": "@open_problems_menu",
//   "OPEN_INFRA_MENU": "@open_infra_menu",
//   "OPEN_COMPONENTS_MENU": "@open_components_menu",
//   "OPEN_MAIN_MENU_LVL1": "@open_main_menu_lvl1",
//   "OPEN_MAIN_MENU_LVL2": "@open_main_menu_lvl2",
//   "OPEN_MAIN_MENU_LVL3": "@open_main_menu_lvl3",
  
//   // Canvas actions
//   "ACTIVATE_EDIT_MODE": "@activate_edit_mode",
// }
