import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      quantity: 1,
    },
    mutations: {
      increment(state) {
        state.quantity++;
      },
      dicrement(state) {
        state.quantity--;
      },
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
