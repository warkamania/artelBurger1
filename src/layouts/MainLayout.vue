<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-grey-10">
      <q-header class="bg-grey-10">
        <br />
        <div class="row">
          <div class="col-12 row wrap justify-center">
            <img src="logo.png" alt="logo" @click="clickHome" style=" width: 140px; height: 120px" />
          </div>
        </div>
        <div class="row wrap justify-end items-end content-end">
          <div class="col-2">
            <q-btn size="md" flat icon="shopping_bag" to="CardApp">
              <q-badge color="red" floating rounded>{{ Card.length }}</q-badge>
            </q-btn>
          </div>
        </div>
      </q-header>
      <br />

      <slot>
        <q-footer class="bg-grey-10">
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


export default defineComponent({
  name: "MainLayout",
  components: { MenuApp },
  setup() {
    return {
      Card: ref([])
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
    }
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
    }
  },



  methods: {
    clickHome() {
      this.$router.push("/");
    },
  },
});
</script>
<style lang="sass" scoped></style>
