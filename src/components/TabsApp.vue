<template>
  <div class="q-pa-xs">
    <div class="q-gutter-y-md">
      <q-infinite-scroll>


        <q-card class="bg-black text-white">
          <q-tabs v-model="tab" dense class="text-grey bg-black fix" active-color="red" indicator-color="red"
            align="justify" narrow-indicator infinite>
            <q-tab name="Бургер" label="Бургеры" />
            <q-tab name="Пицца" label="Пицца" />
            <q-tab name="Горячие Закуски" label="Горячие Закуски" />
            <q-tab name="Салаты" label="Салаты" />
            <q-tab name="Первые Блюда" label="Первые Блюда" />
            <q-tab name="Горячие Блюда" label="Горячие Блюда" />
            <q-tab name="Десерты" label="Десерты" />
            <q-tab name="Фирменные лимонады" label="Фирменные лимонады" />
            <q-tab name="Паста" label="Паста" />
            <q-tab name="Сендвичи" label="Сендвичи" />
            <q-tab name="Блины" label="Блины" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated class="bg-black text-white fix" infinite>
            <q-tab-panel name="Бургер" id="burger">
              <div class="row" @scroll="scroll()">
                <h6>Бургеры</h6>
                {{ idd() }}
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="1" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="2" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="3" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="4" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="5" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="6" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="7" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="8" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="10" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="12" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="13" />
                </div>

                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="16" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="17" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="18" />
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="19" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="21" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="22" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="24" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="25" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="26" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="27" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="28" />
                  </div>
                  <div class="col-12" style="word-wrap: break-word;">
                    <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                      :index="29" />
                  </div>

                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Пицца">
              <div class="text-h6">Пицца</div>

              <div class="row">
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="0" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="9" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="11" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="14" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="15" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="20" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="23" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="30" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="31" />
                </div>
                <div class="col-12" style="word-wrap: break-word;">
                  <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category"
                    :index="32" />
                </div>
              </div>

            </q-tab-panel>

            <q-tab-panel name="Горячие Закуски" id="snacks">
              <div class="text-h6">Горячие Закуску</div>
              <div class="row">
                <div class="col-12" style="word-wrap: break-word;">

                </div>
                <div class="col-12" style="word-wrap: break-word;">

                </div>
              </div>
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
            <q-tab-panel name="Блины">
              <div class="text-h6">Блины</div>
              <div class="col-12" style="word-wrap: break-word;">
                <CardMenuVue :title="title" :price="price" :img="img" :structure="structure" :category="category" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <div style="color: white;"></div>
        </q-card>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>

import { map, filter } from "underscore"
import CardMenuVue from "./CardMenu.vue";
import db from 'src/boot/firebase';
import { v4 as uuidv4 } from "uuid";

export default {
  props: [
    "title",
    "price",
    "structure",
    "category",
    "img",
    "quntity",
    "option",
    "scrolling",
  ],
  data() {
    return {
      tab: "Бургер",
      menus: [],
      categoryClick: "",
      id: "",

    };
  },
  async mounted() {
    db.collection("Burger").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const burgerChange = change.doc.data();

        if (change.type === "added") {
          //console.log("New burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
        if (change.type === "modified") {
          // console.log("Modified burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
        if (change.type === "removed") {
          //console.log("Removed burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
      });
    });
  },
  computed: {
    filterBurger() {
      return filter(this.menus, x => x.Category == "Бургер")
    },
    filterSnacks() {
      return filter(this.menus, x => x.Category == "Закуски")
    },
    parsePriceSnacks() {
      return map(this.filterSnacks, x => x.price)

    },
    parseStructureSnacks() {
      return map(this.filterSnacks, x => x.structure)

    },
    parseImgSnacks() {
      return map(this.filterSnacks, x => x.img)

    },
    parseTitleSnacks() {
      return map(this.filterSnacks, x => x.title)
    },
    filterSalats() {
      return filter(this.menus, x => x.Category == "Салаты")
    },
    parsePriceSalats() {
      return map(this.filterSalats, x => x.price)

    },
    parseStructureSalats() {
      return map(this.filterSalats, x => x.structure)

    },
    parseImgSalats() {
      return map(this.filterSalats, x => x.img)

    },
    parseTitleSalats() {
      return map(this.filterSalats, x => x.title)
    },
    filterFirst() {
      return filter(this.menus, x => x.Category == "Первые Блюда")
    },
    parsePriceFirst() {
      return map(this.filterFirst, x => x.price)

    },
    parseStructureFirst() {
      return map(this.filterFirst, x => x.structure)

    },
    parseImgFirst() {
      return map(this.filterFirst, x => x.img)

    },
    parseTitleFirst() {
      return map(this.filterFirst, x => x.title)
    },
    filterPizza() {
      return filter(this.menus, x => x.Category == "Пицца")
    },
    filterBlin() {
      return filter(this.menus, x => x.Category == "Блины")
    },




  },
  beforeUpdate() {
    // this.onTab();
    // this.tab1()
    this.tab_()
  },

  methods: {
    // onTab() {
    //   if (this.scrolling == true) {
    //     this.tab = "Горячие Закуски"
    //   }
    //   !this.scrolling
    // },
    // tab1() {
    //   if (this.tab == "Горячие Закуски" && this.scrolling == true) {
    //     this.tab = "Салаты"
    //   }
    // },

    tab_() {
      const a = this.tab && this.scrolling

      switch (a) {
        case "Горячие Закуски":
        case true:
          this.tab = "Салаты"
          break;
        case "Салаты":
        case true:
          this.tab = "Первые Блюда"
          break;
        case "Первые Блюда":
        case true:
          this.tab = "Горячие Блюда"
          break;
        case "Горячие Блюда":
        case true:
          this.tab = "Десерты"
          break;
        case "Десерты":
        case true:
          this.tab = "Фирменные лимонады"
          break;
        default:
          this.tab = "Бургер"
      }
    },
    idd() {
      this.id = uuidv4();
    }

  },

  components: { CardMenuVue },
};
</script>
<style>
.fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
