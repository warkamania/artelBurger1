<template>
  <div class="q-pa-xs">
    <div class="q-gutter-y-xs">
      <q-card class="bg-black text-white">
        <q-tabs v-model="tab" dense class="text-grey bg-black" active-color="red" indicator-color="red" align="justify"
          narrow-indicator>
          <q-tab name="Burger" label="Бургеры" />
          <q-tab name="snacks" label="Горячие Закуску" />
          <q-tab name="salads" label="Салаты" />
          <q-tab name="first" label="Первые Блюда" />
          <q-tab name="hot" label="Горячие Блюда" />
          <q-tab name="desserts" label="Десерты" />
          <q-tab name="Lemonades" label="Фирменные лимонады" />
          <q-tab name="Pasta" label="Паста" />
          <q-tab name="sandwiches" label="Сендвичи" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-black text-white">
          <q-tab-panel name="Burger" id="burger">
            <div class="row">
              <div class="col-6">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="Category"
                  :index="1" />
              </div>
              <div class="col-6">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="Category"
                  index="2" />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="snacks" id="snacks">
            <div class="text-h6">Горячие Закуску</div>
            Горячие Закуску
          </q-tab-panel>

          <q-tab-panel name="salads">
            <div class="text-h6">Салаты</div>
            Салаты
          </q-tab-panel>
          <q-tab-panel name="first">
            <div class="text-h6">Первые Блюда"</div>
            Первые Блюда"
          </q-tab-panel>
          <q-tab-panel name="hot">
            <div class="text-h6">Горячие Блюда</div>
            Горячие Блюда
          </q-tab-panel>
          <q-tab-panel name="desserts">
            <div class="text-h6">Десерты</div>
            Десерты
          </q-tab-panel>
          <q-tab-panel name="Lemonades">
            <div class="text-h6">Фирменные лимонады</div>
            Фирменные лимонады
          </q-tab-panel>
          <q-tab-panel name="Pasta">
            <div class="text-h6">Паста</div>
            Паста
          </q-tab-panel>
          <q-tab-panel name="sandwiches">
            <div class="text-h6">Сендвичи</div>
            Сендвичи
          </q-tab-panel>
        </q-tab-panels>
        <div style="color: white;"></div>
      </q-card>

    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import _ from "lodash"
import CardMenuVue from "./CardMenu.vue";

export default {
  props: {
    title: String,
    price: String,
    Structure: String,
    Category: String,
    Img: String,
  },
  setup() {
    return {
      tab: ref("Burger"),
      menu: ref([]),
      CategoryClick: ref(""),

    };
  },
  async mounted() {
    db.collection("Burger").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const burgerChange = change.doc.data();

        if (change.type === "added") {
          console.log("New burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
        if (change.type === "modified") {
          console.log("Modified burger: ", burgerChange);
        }
        if (change.type === "removed") {
          console.log("Removed burger: ", burgerChange);
        }
      });
    });
  },
  computed: {
    filterBurger() {
      return _.map(this.Category, "Бургер")
    }
  },
  watch: {
    CategoryClick() {

    }
  },
  components: { CardMenuVue },
};
</script>
