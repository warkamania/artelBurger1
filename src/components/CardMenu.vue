<template>
  <div class="q-pa-xs row items-start q-gutter-xs">
    <!-- <q-intersection v-for="index in 2" :key="index" once transition="scale"> -->
    <q-card class="my-card bg-black text-white" @click="!dialog" v-model="id">
      <!-- <q-btn v-show="!star" @click="stars" flat icon="star_border "
        class="fit row wrap justify-end items-end content-end"></q-btn> -->
      <!-- <q-btn v-show="star" @click="stars" flat icon="star " class="fit row wrap justify-end items-end content-end">
      </q-btn> -->
      <q-card-section>
        <div class="fit row wrap inline justify-between">
          <div class="col-6">
            <q-responsive :ratio="1" class="container">
              <img :src="Img[index]" alt="" @click="OpenDialog" />
            </q-responsive>
          </div>
          <div class="col-6">
            <span class="span-burger" style="word-wrap: break-word;">{{ title[index] }}</span>
            <div class="col-6 price" style="overflow: auto">{{ price[index] }} Р</div>


            <q-btn icon-right="add" @click="persist" v-show="!add" size="md" text-color="white" color="grey-9">
              {{
                  price[index]
              }} P
            </q-btn>
          </div>
        </div>

        <div class="fit row wrap">

          <div class="col-6" style="overflow: auto">

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
    <q-dialog bg-black v-model="alert">
      <q-card class="bg-black">
        <q-card-section bg-white>

        </q-card-section>

        <q-card-section class="q-pt-none " style="color:white">
          <div class=" fit row wrap justify-center">
            <q-responsive :ratio="1" class="containerr">
              <img :src="Img[index]" alt="" @click="OpenDialog" />
            </q-responsive>
          </div>

          <div class="text-h6 " style="color:white">Состав:</div>

          <div class="row">
            {{ Structure[index] }}
          </div>
        </q-card-section>
        <q-card-section bg-white>
          <div class="text-h6 " style="color:white">Добавки</div>
          <div class="text">
            <q-checkbox dark v-model="left" color="red" @click="addOptions">{{ $store.state.options[1] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left1" color="red" @click="addOptions">{{ $store.state.options[2] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left2" color="red" @click="addOptions">{{ $store.state.options[3] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left3" color="red" @click="addOptions">{{ $store.state.options[4] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left4" color="red" @click="addOptions">{{ $store.state.options[5] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left5" color="red" @click="addOptions">{{ $store.state.options[6] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left6" color="red" @click="addOptions">{{ $store.state.options[7] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left7" color="red" @click="addOptions">{{ $store.state.options[8] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left8" color="red" @click="addOptions">{{ $store.state.options[9] }}</q-checkbox>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <div class="row fit justify-center">

            <q-btn label="" icon-right="add" color="red" v-show="!add" @click="persist" style="width:300px">{{
                price[index]
            }} Р</q-btn>
          </div>


          <div class="fit row wrap" v-show="add">
            <div class="col-2">
              <q-btn flat icon="remove" color="red" @click="CounterMinus"></q-btn>
            </div>
            <div class="col-2">
              <q-input dense color="red" outlined v-model="quantity" label="" type="number" dark />
            </div>
            <div class="col-2">
              <q-btn flat icon="add" color="red" @click="CounterPlus"></q-btn>
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
//import DialogAppVue from "./DialogApp.vue";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from 'vuex'
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
    const $store = useStore()

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
      left: ref(false),
      left1: ref(false),
      left2: ref(false),
      left3: ref(false),
      left4: ref(false),
      left5: ref(false),
      left6: ref(false),
      left7: ref(false),
      left8: ref(false),
      options: ref(""),


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
  computed: {

  },

  methods: {
    OpenDialog() {
      this.alert = !this.alert
    },
    persist() {
      this.add = true
      this.id = uuidv4();
      this.Card.push({ title: this.title[this.index], price: this.price[this.index], img: this.Img[this.index], options: this.options });
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
      this.$store.commit('increment')
    },
    CounterMinus() {
      this.quantity--
      this.$store.commit('dicrement')
    },
    SumDop() {

    },
    addOptions() {
      if (this.left) {
        this.options = this.$store.state.options[1]
      }
      if (this.left1) {
        this.options = this.options + " " + this.$store.state.options[2]
      }
      if (this.left2) {
        this.options = this.options + " " + this.$store.state.options[3]
      }
      if (this.left3) {
        this.options = this.options + " " + this.$store.state.options[4]
      }
      if (this.left4) {
        this.options = this.options + " " + this.$store.state.options[5]
      }
      if (this.left5) {
        this.options = this.options + " " + this.$store.state.options[6]
      }
      if (this.left6) {
        this.options = this.options + " " + this.$store.state.options[7]
      }
      if (this.left7) {
        this.options = this.options + " " + this.$store.state.options[8]
      }
      if (this.left8) {
        this.options = this.options + " " + this.$store.state.options[9]
      }

    }




  },
  components: {},
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
</style>
<style >
.containerr {
  width: 350px;
  height: 300px;
}

img {
  border-radius: 15px;
  width: 170px;
  height: 170px;
}

.span-burger {
  font-size: 18px;
}

.price {
  color: red;
  font-size: 18px;
}

.text {
  color: white;
}

.textGradient18 {
  background-image: linear-gradient(to right, #553c9a 18%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
