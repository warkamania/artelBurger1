<template>
  <q-page>
    <div class="row justify-center items-center content-center">
      <div class="col-12 q-pa-md fix">
        <q-btn-toggle class="col-12" v-model="toogle" text-color="white" size="md" toggle-color="red"
          @click="alert = true" :options="[
            { label: 'Доставка', value: 'Доставка' },
            { label: 'Самовывоз', value: 'Самовывоз' },
            { label: 'В ресторане', value: 'В ресторане' },
          ]" />
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm ">
      <q-dialog bg-white v-model="alert" v-if="toogle != 'Доставка'">
        <q-card class="bg-black">
          <q-card-section bg-black>
            <div class="text-h6" style="color:white">{{ toogle }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-white" style="color: white">
            Вы изменили способ получения заказа
            <div class="q-pa-md">
              <q-option-group :options="rest" type="radio" v-model="group" dark />
            </div>
          </q-card-section>

          <div class="row">
            <q-btn icon-right="qr_code_scanner" text-color="white" color="red" v-close-popup class="col-12" @click="turnCameraOn()

              " label="Сканировать qr-код" push v-show="!showCamera" />
          </div>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="red" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div v-show="showCamera">
      <q-dialog bg-white v-model="showCamera">
        <div class="stream">
          <qr-stream @decode="onDecode" class="mb">
            <div style="color: rgb(47, 0, 255);"></div>
          </qr-stream>
        </div>
        <div class="result">
          Result: {{ data }}
        </div>
      </q-dialog>
    </div>
    <div class="row fix">
      <div class="col-12 fix">
        <TabsApp :title="parseTitle" :price="parsePrice" :img="parseImg" :structure="parseStructure"
          :category="parseCategory" :option="toogle" :scrolling="scrolledToBottom" class="fix" />
      </div>
    </div>

  </q-page>
</template>

<script>


import TabsApp from "src/components/TabsApp.vue";
import db from 'src/boot/firebase';
import { map, filter } from "underscore"
import { reactive, toRefs } from 'vue'
import { QrStream } from 'vue3-qr-reader';
export default {
  data() {
    const state = reactive({
      data: null
    })
    function onDecode(data) {
      state.data = data
    }
    return {
      ...toRefs(state),
      onDecode,
      searchQuery: "",
      id: "",
      title: "",
      price: "",
      sum: 0,
      card: [],
      selectedSort: "",
      menus: [],
      img: "",
      category: null,
      structure: "",
      documentID: "",
      toogle: "Доставка",
      value: "",
      alert: false,
      group: null,
      scrolledToBottom: false,
      camera: 'auto',
      qr: false,
      showCamera: false,
      isValid: undefined,

      result: null,

      rest: [
        { label: 'улица 2-я Новоселовка 64 А ', value: 'боевка' },
        { label: 'Новый ресторан', value: 'новосёловка', color: 'green' },

      ]


    };
  },
  async mounted() {
    if (localStorage.getItem("Card")) {
      try {
        this.card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }
    db.collection("Burger").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const burgerChange = change.doc.data();

        if (change.type === "added") {
          //console.log("New burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
        if (change.type === "modified") {
          //console.log("Modified burger: ", burgerChange);
        }
        if (change.type === "removed") {
          //console.log("Removed burger: ", burgerChange);
        }
      });
    });
    // this.scroll()
  },
  computed: {
    sortedMenus() {
      return [...this.menus].sort((menu1, menu2) => menu1[this.selectedSort]?.localeCompare(menu2[this.selectedSort]))
    },
    sortedAndSearchedMenus() {
      return this.sortedMenus.filter(menu => menu.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    parseTitle() {
      return map(this.menus, x => x.title)

    },
    parsePrice() {
      return map(this.menus, x => x.price)

    },
    parseStructure() {
      return map(this.menus, x => x.structure)

    },
    parseImg() {
      return map(this.menus, x => x.img)

    },
    parseCategory() {
      return map(this.menus, x => x.Category)

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

    parsedBurgerNew() {
      return map(this.menus, x => x.burgerNew)
    },
    parsedBurgerPop() {
      return map(this.menus, x => x.burgerPop)
    },
    filterCategory() {
      return filter(this.menus, x => x.Category == 'Category')
    },
    filterBurger() {
      return filter(this.menus, x => x.Category == "Бургер")
    },
    filterSnacks() {
      return filter(this.menus, x => x.Category == "Закуски")
    },
    scrolling() {
      return this.scrolledToBottom
    },
    cardMap() {
      return map(this.card, x => x.title)
    },
    textInfo() {
      return this.showCamera ? 'position the qrcode on the camera' : 'Press the button and scan a qrcode.'
    }




  },
  methods: {
    persist() {
      this.card.push({ id: this.id, title: this.title, price: this.price, option: this.toogle });
      this.saveCard();
    },
    saveCard() {
      const parsed = JSON.stringify(this.card);
      localStorage.setItem("Card", parsed);
    },
    getId(id) {
      // return db.collection('Burger').doc(id).get()
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true
        }
        console.log(bottomOfWindow)
      }
    },

    turnCameraOn() {
      this.camera = 'auto'
      this.showCamera = true
    },
    turnCameraOff() {
      this.camera = 'off'
      this.showCamera = false
    }


  },
  watch: {
    // onScrol() {
    //   this.scrolledToBottom
    // }
  },
  components: { TabsApp, QrStream }
}
</script>

<style>
.fix {
  position: sticky;
  top: 0px;
}
</style>
