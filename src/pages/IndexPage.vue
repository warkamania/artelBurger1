<template>
  <q-page>
    <div class="row">
      <div class="col-12 " style="font-size: 22px; color: whitesmoke;">
        {{ Time }}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <NewsPanel :textt="newsText" :img="newsImg" :index="0" />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12 q-pa-md">
        <q-btn-toggle class="col-12" v-model="toogle" text-color="white" toggle-color="red" :options="[
          { label: 'Популярное', value: 'one' },
          { label: 'Новинки', value: 'two' },
          { label: 'Избранные', value: 'three' },
        ]" />
      </div>
      <div class="col-6">
        <CardMenu @click="openDialog" :title="parseTitle" :price="parsePrice" :Img="parseImg"
          :Structure="parseStructure" :Category="parseCategory" :index="1" :toogle="toogle" />
      </div>
      <div class="col-6">
        <CardMenu @click="openDialog" :title="parseTitle" :price="parsePrice" :Img="parseImg"
          :Structure="parseStructure" :Category="parseCategory" :index="2" :toogle="toogle" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <DialogApp v-show="!Dialog" />
      </div>

    </div> -->

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import NewsPanel from "../components/NewsPanel.vue";

import { ref } from "vue";

import db from 'src/boot/firebase';
import _ from "lodash"
export default defineComponent({

  name: "IndexPage",
  components: { NewsPanel, },
  setup() {
    return {
      lorem: "Бургер",
      toogle: ref("one"),
      value: ref(""),
      Dialog: ref(false),
      menus: ref([]),
      News: ref([])
    };
  },
  mounted() {
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
    db.collection("News").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const newsChange = change.doc.data();

        if (change.type === "added") {
          console.log("New News: ", newsChange);
          //this.News.unshift(newsChange);
        }
        if (change.type === "modified") {
          //console.log("Modified News: ", newsChange);
        }
        if (change.type === "removed") {
          //console.log("Removed News: ", newsChange);
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
    newsText() {
      return _.map(this.News, 'textNews')
    },
    newsImg() {
      return _.map(this.News, 'img')
    }
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
  background-image: linear-gradient(to right, #553c9a 8%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
