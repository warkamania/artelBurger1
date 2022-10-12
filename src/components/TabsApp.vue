<template>
  <div class="q-pa-xs">
    <div class="q-gutter-y-xs">
      <q-card class="bg-black text-white">
        <q-tabs v-model="tab" dense class="text-grey bg-black" active-color="red" indicator-color="red" align="justify"
          narrow-indicator>
          <q-tab name="Бургер" label="Бургеры" />
          <q-tab name="Горячие Закуски" label="Горячие Закуски" />
          <q-tab name="Салаты" label="Салаты" />
          <q-tab name="Первые Блюда" label="Первые Блюда" />
          <q-tab name="Горячие Блюда" label="Горячие Блюда" />
          <q-tab name="Десерты" label="Десерты" />
          <q-tab name="Фирменные лимонады" label="Фирменные лимонады" />
          <q-tab name="Паста" label="Паста" />
          <q-tab name="Сендвичи" label="Сендвичи" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-black text-white">
          <q-tab-panel name="Бургер" id="burger">
            <div class="row">
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="0" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="1" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="2" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="3" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="4" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="5" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="6" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="7" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="8" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="9" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="10" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="11" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="12" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="13" />
              </div>
              <div class="col-6" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                  :index="14" />
                <div class="col-6" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :Img="Img" :Structure="Structure" :Category="filterBurger"
                    :index="15" />
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Горячие Закуски" id="snacks">
            <div class="text-h6">Горячие Закуску</div>
            Горячие Закуску
          </q-tab-panel>

          <q-tab-panel name="Салаты">
            <div class="text-h6">Салаты</div>
            Салаты
          </q-tab-panel>
          <q-tab-panel name="Первые Блюда">
            <div class="text-h6">Первые Блюда"</div>
            Первые Блюда"
          </q-tab-panel>
          <q-tab-panel name="Горячие Блюда">
            <div class="text-h6">Горячие Блюда</div>
            Горячие Блюда
          </q-tab-panel>
          <q-tab-panel name="Десерты">
            <div class="text-h6">Десерты</div>
            Десерты
          </q-tab-panel>
          <q-tab-panel name="Фирменные лимонады">
            <div class="text-h6">Фирменные лимонады</div>
            Фирменные лимонады
          </q-tab-panel>
          <q-tab-panel name="Паста">
            <div class="text-h6">Паста</div>
            Паста
          </q-tab-panel>
          <q-tab-panel name="Сендвичи">
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
import db from 'src/boot/firebase';
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
      tab: ref("Бургер"),
      menus: ref([]),
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
          this.menus.unshift(burgerChange);
        }
        if (change.type === "removed") {
          console.log("Removed burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
      });
    });
  },
  computed: {


    filterBurger() {
      return _.find(this.menus, ['Category', this.tab])
    },


  },
  watch: {
    CategoryClick() {

    }
  },
  components: { CardMenuVue },
};
</script>
