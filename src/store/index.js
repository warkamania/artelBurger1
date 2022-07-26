import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth from "./auth.js";
import menu from "./menu.js";
import news from "./news.js";
import promotion from "./promotion.js";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      menu,
      news,
      promotion,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
