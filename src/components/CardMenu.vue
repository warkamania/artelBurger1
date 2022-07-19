<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-intersection v-for="index in 1" :key="index" once transition="scale">
      <q-card class="my-card bg-black text-white" @click="!dialog" v-model="id">
        <q-card-section>
          <q-responsive :ratio="1">
            <img src="burger.jpg" alt="" class="img" @click="dialog = true" />
          </q-responsive>

          <span class="span-burger">Бурый медведь</span>
          <br />
          <div class="fit row wrap justify-between">
            <div class="col-6 price" style="overflow: auto">440 р</div>
            <div class="col-6" style="overflow: auto">
              <q-btn flat icon="add_box" @click="persist"></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
  <DialogAppVue v-show="!dialog" />
</template>

<script>
import DialogAppVue from "./DialogApp.vue";
import { ref } from "vue";
export default {
  setup() {
    return {
      dialog: ref(false),
      id: ref(""),
      title: ref(""),
      price: ref(0),
      sum: ref(0),
      Card: ref([]),
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

  methods: {
    OpenDialog() {
      !this.dialog;
    },
    persist() {
      this.Card.push(this.id, this.title);
      this.saveCard();
    },
    saveCard() {
      const parsed = JSON.stringify(this.Card);
      localStorage.setItem("Card", parsed);
    },
  },
  components: { DialogAppVue },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
<style>
.img {
  width: 500px;
  height: 500px;
}
.span-burger {
  font-size: 18px;
}
.price {
  color: red;
  font-size: 18px;
}
</style>
