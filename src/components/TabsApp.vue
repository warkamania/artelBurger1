<template>
  <div class="q-pa-xs">
    <div class="q-gutter-y-xs">
      <q-card class="bg-black text-white">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey bg-black"
          active-color="red"
          indicator-color="red"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Burger" label="Бургеры" />
          <q-tab name="alarms" label="Горячие Закуску" />
          <q-tab name="movies" label="Салаты" />
          <q-tab name="movies1" label="Первые Блюда" />
          <q-tab name="movies3" label="Горячие Блюда" />
          <q-tab name="movies4" label="Десерты" />
          <q-tab name="movies5" label="Фирменные лимонады" />
          <q-tab name="movies6" label="Паста" />
          <q-tab name="movies7" label="Сендвичи" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-black text-white">
          <q-tab-panel name="Burger">
            <div class="row">
              <div class="col-6">
                <CardMenuVue />
              </div>
              <div class="col-6">
                <CardMenuVue />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies1">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies3">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies4">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies5">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies6">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies7">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import CardMenuVue from "./CardMenu.vue";

export default {
  setup() {
    return {
      tab: ref("Burger"),
    };
  },
  components: { CardMenuVue },
};
</script>
