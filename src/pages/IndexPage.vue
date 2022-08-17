<template>
  <q-page>
    <h5 class="textGradient12">главная страница</h5>
    <div class="row">
      <div class="col-12 textGradient12" style="font-size: 22px">
        {{ Time }}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <NewsPanel textt="НОВОСТИ" />
      </div>
    </div>
    <div class="row">
      <div class="q-pa-md">
        <q-btn-toggle v-model="toogle" text-color="white" toggle-color="red" :options="[
          { label: 'Популярное', value: 'one' },
          { label: 'Новинки', value: 'two' },
          { label: 'Избранные', value: 'three' },
        ]" />
      </div>
      <div class="col-6">
        <CardMenu @click="openDialog" />
      </div>
      <div class="col-6">
        <CardMenu @click="openDialog" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <DialogApp v-show="!Dialog" />
      </div>

    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import NewsPanel from "../components/NewsPanel.vue";
import CardMenu from "../components/CardMenu.vue";
import { ref } from "vue";
import DialogApp from "src/components/DialogApp.vue";
import db from 'src/boot/firebase';

export default defineComponent({

  name: "IndexPage",
  components: { NewsPanel, CardMenu, DialogApp },
  setup() {
    return {
      lorem: "Бургер",
      toogle: ref("one"),
      value: ref(""),
      Dialog: ref(false),
      menus: ref([])
    };
  },
  mounted() {
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
    Time() {
      let date = new Date();
      let dateHours = date.getHours();
      let day = "Доброе утро!";
      if (dateHours <= 11) {
        day;
      } else if (dateHours >= 12 || dateHours <= 17) {
        day = "Добрый день!";
      } else if (dateHours >= 18) {
        day = "Добрый вечер";
      }
      return day;
    },
    parseTitle() {
      return _.map(this.menus, 'title')

    },
    parsePrice() {
      return _.map(this.menus, 'price')

    },
    parseStructure() {
      return _.map(this.menus, 'structure')

    },
    parseImg() {
      return _.map(this.menus, 'img')

    },
    parseCategory() {
      return _.map(this.menus, 'Category')

    },
  },
  methods: {
    openDialog() {
      this.Dialog = !this.Dialog
    }
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
<style>
.textGradient12 {
  background-image: linear-gradient(to right, #553c9a 12%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
