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
        <!-- <div class="row wrap justify-end items-end content-end">
          <div class="col-2">
            <q-btn size="md" flat icon="shopping_bag" to="CardApp">
              <q-badge color="red" floating rounded>{{ Card.length }}</q-badge>
            </q-btn>
          </div>
        </div> -->
      </q-header>
      <br />

      <slot>



        <div class="row ">
          <div class="">
            <q-footer class="white col-10">
              <div class="row full-width " v-show="Card != 0">
                <q-btn icon="shopping_bag" label="  Корзина     " style="width: 280px" to="CardApp" class="btn"
                  @click="click">
                  {{ " " + " " + parsePrice * Card.length + " Р" }}
                </q-btn>
              </div>
              <br />
            </q-footer>
          </div>
          <div class="">
            <q-footer class="white col-2" v-show="menu">
              <div class="row justify-end">
                <q-btn to="/" icon="house" outline="true" color="red" @click="deleteMenu"></q-btn>
              </div>
              <br />
            </q-footer>
          </div>

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
import { useStore } from 'vuex'

export default defineComponent({
  name: "MainLayout",
  components: { MenuApp },
  setup() {
    return {
      Card: ref([]),
      menus: ref(false)
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
      console.log(newCard)
    },
    url() {
      Url.getPath('http://localhost:8080/#/OrderApp')
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
      return this.$store.state.menu
    },

  },



  methods: {
    clickHome() {
      this.$router.push("/");
    },
    deleteMenu() {
      this.$store.state.menu = ""
    },
    click() {
      console.log("click")
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
