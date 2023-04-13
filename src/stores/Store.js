import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    quantity: 1,
    options: {
      1: "котлета из мраморной говядины (+90 ₽)",
      2: "котлета свиная (+80 ₽)",
      3: "котлета куриная (+70 ₽)",
      4: "сыр Чеддер (+30 ₽)",
      5: "окорок прошутто (+80 ₽)",
      6: "яйцо на гриле (+30 ₽)",
      7: "перец халапеньо (+50 ₽)",
      8: "бекон (+70 ₽)",
      9: "соус шрирача (+50 ₽)",
    },
    optionsPrice: {
      1: 90,
      2: 80,
      3: 70,
      4: 30,
      5: 80,
      6: 30,
      7: 50,
      8: 70,
      9: 50,
    },
    sauce: {
      1: "Томатный соус",
      2: "Сливочный соус",
    },
    menu: "",
    summa: 0,
    Card: [],
  }),
  actions: {
    increment(state) {
      state.quantity++;
    },
    dicrement(state) {
      state.quantity--;
    },
    clickMenu(state) {
      state.menu = "Меню";
    },
  },
});
