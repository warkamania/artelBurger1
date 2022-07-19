import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth from "./auth.js";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
