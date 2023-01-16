import { createStore, createEvent, createEffect, forward } from "effector"
import { http } from "~features/ApiClient"; 
import { apiConstants } from "~utils/constants";

const { API_LOGIN_URL } = apiConstants;

const userLogin = createEvent();
const userLogout = createEvent();

const userLoginButtonClicked = createEvent();
const userLogoutButtonClicked = createEvent();

const $userStore = createStore(null)
  .on(userLogin, (_, newUser) => newUser)
  .on(userLogout, () => null)

const startLoginFx = createEffect(
  () => http.get(`${API_LOGIN_URL}/1`)
    .then((res) => userLogin(res.data))
);
const startLogoutFx = createEffect(() => userLogout());
 

forward({from: userLoginButtonClicked, to: startLoginFx})
forward({from: userLogoutButtonClicked, to: startLogoutFx})

// window.userStore = $userStore;
export {
  $userStore, 
  userLogin, 
  userLogout, 
  userLoginButtonClicked, 
  userLogoutButtonClicked
};
