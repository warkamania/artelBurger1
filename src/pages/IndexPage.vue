<template>
  <q-page>
    <h5 class="textGradient12">главная страница</h5>
    <div class="row">
      <div class="col-12">{{ Time }}</div>
    </div>
    <div class="row">
      <div class="col-12">
        <NewsPanel textt="НОВОСТИ" />
      </div>
    </div>
    <div class="row">
      <div class="q-pa-md">
        <q-btn-toggle
          v-model="model"
          text-color="white"
          toggle-color="red"
          :options="[
            { label: 'Популярное', value: 'one' },
            { label: 'Новинки', value: 'two' },
          ]"
        />
      </div>
      <div class="col-6">
        <CardMenu />
      </div>
      <div class="col-6">
        <CardMenu />
      </div>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import NewsPanel from "../components/NewsPanel.vue";
import CardMenu from "../components/CardMenu.vue";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: { NewsPanel, CardMenu },
  setup() {
    return {
      lorem: "Бургер",
      model: ref(null),
    };
  },
  computed: {
    Time() {
      let date = new Date();
      let dateHours = date.getHours();
      if (dateHours <= 11) {
        const day = "Доброе утро!";
      } else if (dateHours <= 12 || dateHours >= 17) {
        const day = "Добрый день!";
      } else {
        const day = "Добрый вечер";
      }
      return this.day;
    },
  },
  methods: {
    dayTime() {},
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
