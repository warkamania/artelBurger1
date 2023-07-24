<template>
  <q-page>
    <div class="row">
      <div class="col-12 " style="font-size: 22px; color: whitesmoke;">
        <!-- {{ Time }} -->

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <NewsPanel :textt="newsText" :img="newsImg" :index=0 />
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
import { map } from 'underscore'
import NewsPanel from "../components/NewsPanel.vue";

export default {

  name: "IndexPage",
  components: { NewsPanel, },

  data() {
    return {
      lorem: "Бургер",
      toogle: "one",
      value: "",
      dialog: false,
      menus: [],
      news: []
    };


  },


  computed: {

    time() {
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
    newsText() {
      return map(this.news, x => x.textNews)
    },
    newsImg() {
      return map(this.news, x => x.img)
    }


  }








};

</script>

<style>
.textGradient12 {
  background-image: linear-gradient(to right, #553c9a 8%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
