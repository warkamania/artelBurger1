<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- <q-intersection v-for="index in 2" :key="index" once transition="scale"> -->
    <q-card class="my-card bg-black text-white" @click="!dialog" v-model="id">
      <q-btn v-show="!star" @click="stars" flat icon="star_border "
        class="fit row wrap justify-end items-end content-end"></q-btn>
      <q-btn v-show="star" @click="stars" flat icon="star " class="fit row wrap justify-end items-end content-end">
      </q-btn>
      <q-card-section>
        <q-responsive :ratio="1" class="container">
          <img :src="Img[index]" alt="" @click="OpenDialog" />
        </q-responsive>

        <span class="span-burger" style="word-wrap: break-word;">{{ title[index] }}</span>
        <br />
        <div class="fit row wrap justify-between">
          <div class="col-6 price" style="overflow: auto">{{ price[index] }} Р</div>
          <div class="col-6" style="overflow: auto">
            <q-btn flat icon="add_box" @click="persist" v-show="!add"></q-btn>
            <!-- <q-btn flat icon="done" v-show="add" color="green"></q-btn> -->
          </div>
          <div class="fit row wrap" v-show="add">
            <div class="col-4">
              <q-btn flat icon="remove" color="white" @click="CounterMinus"></q-btn>
            </div>
            <div class="col-3">
              <q-input dense dark color="red" outlined v-model="quantity" label="" type="number" />
            </div>
            <div class="col-2">
              <q-btn flat icon="add" color="white" @click="CounterPlus"></q-btn>
            </div>
          </div>

        </div>
      </q-card-section>
    </q-card>
    <!-- </q-intersection> -->
  </div>
  <div class="q-pa-md q-gutter-sm ">
    <q-dialog bg-white v-model="alert">
      <q-card class="bg-white">
        <q-card-section bg-white>
          <div class="text-h6 textGradient18">Состав</div>
        </q-card-section>

        <q-card-section class="q-pt-none textGradient18">
          {{ Structure[index] }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
//import DialogAppVue from "./DialogApp.vue";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    title: String,
    price: String,
    Structure: String,
    Category: String,
    Img: String,
    index: Number,
    toogle: String,
  },
  setup() {
    return {
      dialog: ref(false),
      id: ref(null),
      sum: ref(0),
      Card: ref([]),
      Menus: ref([]),
      star: ref(false),
      alert: ref(false),
      idfavourites: ref([]),
      add: ref(false),
      quantity: ref(1),


    };
  },
  async mounted() {
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
      this.alert = !this.alert
    },
    persist() {
      this.add = true
      this.id = uuidv4();
      this.Card.push({ title: this.title[this.index], price: this.price[this.index], img: this.Img[this.index] });
      this.saveCard();
    },
    saveCard() {
      const parsed = JSON.stringify(this.Card);
      localStorage.setItem("Card", parsed);
    },
    stars() {
      this.star = !this.star
      this.idfavourites = { id: this.id }
    },
    CounterPlus() {
      this.quantity++
    },
    CounterMinus() {
      this.quantity--

    },




  },
  components: {},
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
<style >
.container {
  width: 150px;
  height: 150px;
}

.container img {
  width: 100%;
  height: auto;
}

.span-burger {
  font-size: 18px;
}

.price {
  color: red;
  font-size: 18px;
}

.textGradient18 {
  background-image: linear-gradient(to right, #553c9a 18%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
