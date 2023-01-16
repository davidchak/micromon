import { createStore, createEvent, sample, createEffect } from "effector";
import { applicationConstants } from "~utils/constants"
import { logger } from "~utils/logger"

const { APP_NAME, APP_VERSION } = applicationConstants;

const initStore = createEvent();

const $appStore = createStore({
  name: APP_NAME,
  version: APP_VERSION 
})

const loadStoreToWindowFx = createEffect(
  (data) => {
    window.appStore = data;
    logger.info("appStore is loaded")
  }
)

sample({
  clock: initStore,
  source: $appStore,
  target: loadStoreToWindowFx
})

export {
  $appStore, initStore
}
