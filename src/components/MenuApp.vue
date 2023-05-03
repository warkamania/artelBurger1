<template>
  <div>
    <div class="q-pa-md row">
      <q-toolbar class="bg-white text-black shadow-2 rounded-borders">
        <q-btn flat toggle-color="yellow" icon="house" outline="true" label="Главная" to="/" size="sm" class="col-2" />
        <q-btn flat icon="percent" outline="true" label="Акции" to="PromotionApp" size="sm" class="col-3" />
        <q-btn flat icon="lunch_dining" outline="true" label="Меню" to="OrderApp" size="sm" @click="clickOrder"
          class="col-3" />
        <q-btn flat icon="shopping_bag" outline="true" label="Корзина" to="CardApp" size="sm" class="col-2" />
        <q-btn flat icon="more_horiz" outline="true" label="Ещё" to="MoreApp" size="sm" class="col-2" />
        <q-space />
      </q-toolbar>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from 'stores/Store';

export default {
  setup() {
    const store = useCounterStore();
    console.log("!!!!!!!!!!!!!!!")
    return {
      click: ref(""),
      store

    };
  },

  methods: {
    clickOrder() {
      this.click = "Меню"
      this.store.menu = this.click
      console.log("Click")
    }
  }
};
</script>

<style></style>
