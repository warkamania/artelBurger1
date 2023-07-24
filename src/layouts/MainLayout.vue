<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-grey-10">
      <q-header class="bg-grey-10" reveal :reveal-offset="20">
        <br />
        <div class="row">
          <div class="col-12 row wrap justify-center">
            <img src="logo.png" alt="logo" @click="clickHome" style=" width: 140px; height: 120px" />
          </div>
        </div>

      </q-header>
      <br />

      <slot>



        <div class="fit row inline wrap justify-between" style="display: flex;">

          <q-footer class="white col-10 full-width" v-show="store.Card.length != 0" @click="clickCard">
            <div class="  ">
              <q-btn icon="shopping_bag" label="  Корзина     " style="width: 280px; height:50px ;" class="btn">
                {{ summ + " " + "P" }}
              </q-btn>
            </div>
            <br />
          </q-footer>


          <q-footer class="white col-2 " v-show="menu">
            <div class="">
              <q-btn to="/" icon="house" @click="deleteMenu" style="height:50px; margin-left: 300px;" class="btn"></q-btn>
            </div>
            <br />
          </q-footer>


        </div>


        <q-footer class="bg-grey-10" reveal v-show="!menu">
          <div class="row full-width">
            <MenuApp class="col-12 self-center" />
          </div>

        </q-footer>




      </slot>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuApp from "src/components/MenuApp.vue";
import { useCounterStore } from 'stores/Store';

export default defineComponent({
  name: "MainLayout",
  components: { MenuApp },



  setup() {
    const store = useCounterStore();

    return {
      Card: ref([]),
      menus: ref(false),
      store
    };
  },

  mounted() {
    if (localStorage.getItem("Card")) {
      try {
        this.Card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }



  },
  watch: {
    card(newCard) {
      localStorage.Card = newCard;

    },
    url() {
      Url.getPath('http://localhost:8080/#/OrderApp')
    },
    sum() {
      this.store.summa = this.parsePrice * this.Card.length
    },




  },
  beforeUpdate() {
    if (localStorage.getItem("Card")) {
      try {
        this.Card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }
  },

  computed: {
    cardd() {
      if (localStorage.getItem("Card")) {
        JSON.parse(localStorage.getItem("Card"));
      }
      return JSON.parse(localStorage.getItem("Card"))
    },
    parsePrice() {
      return Math.floor(this.Card.length > 0 ? this.Card[0].price : "");
    },
    orderApp() {
      return u = Url.getPath('http://localhost:8080/#/OrderApp')
    },
    menu() {
      return this.store.menu
    },
    sum() {
      return this.parsePrice * this.Card.length
    },
    summ() {
      return this.store.summa
    },

  },



  methods: {
    clickHome() {
      this.$router.push("/");
    },
    deleteMenu() {
      this.store.menu = ""
    },
    click() {
      console.log("click")
    },
    clickCard() {
      this.$router.push("CardApp")
      this.store.menu = ""

    }


  },
});
</script>
<style scoped>
.header {
  position: relative;
}

.btn {
  background-color: rgba(240, 22, 22, 0.9)
}

.white {
  background-color: rgba(255, 255, 255, 0);
}
</style>
