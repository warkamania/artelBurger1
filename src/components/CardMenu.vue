<template>
  <div class=" row items-start ">
    <!-- <q-intersection v-for="index in 2" :key="index" once transition="scale"> -->
    <q-card class="my-card bg-black text-white" @click="!dialog">
      <!-- <q-btn v-show="!star" @click="stars" flat icon="star_border "
            class="fit row wrap justify-end items-end content-end"></q-btn> -->
      <!-- <q-btn v-show="star" @click="stars" flat icon="star " class="fit row wrap justify-end items-end content-end">
          </q-btn> -->
      <q-card-section>

        <div class="fit row wrap inline justify-between">
          <div class="col-6">
            <q-responsive :ratio="1" class="container">
              <img :src="img[index]" alt="" @click="openDialog" />
            </q-responsive>
          </div>

          <div class="col-5">
            <span class="span-burger" style="word-wrap: break-word;">{{ title[index] }}</span>
            <div class="col-5 price" style="overflow: auto">{{ price[index] }} Р</div>


            <q-btn icon-right="add" @click="persist" v-show="!add" size="md" text-color="white" color="grey-9">
              {{
                price[index]
              }}
            </q-btn>
          </div>
        </div>

        <div class="fit row wrap">

          <div class="col-6" style="overflow: auto">

            <!-- <q-btn flat icon="done" v-show="add" color="green"></q-btn> -->
          </div>
          <div class="fit row wrap" v-show="add">
            <div class="col-4">
              <q-btn flat icon="remove" color="white" @click="counterMinus"></q-btn>
            </div>
            <div class="col-3">
              <q-input dense dark color="red" outlined v-model="quantity" label="" type="number" />
            </div>
            <div class="col-2">
              <q-btn flat icon="add" color="white" @click="counterPlus"></q-btn>
            </div>
          </div>

        </div>
      </q-card-section>
    </q-card>
    <!-- </q-intersection> -->
  </div>
  <div>
    <q-dialog bg-black v-model="alert" full-height full-width maximized>
      <q-card class="bg-black">
        <q-card-section bg-white>

        </q-card-section>

        <q-card-section class="q-pt-none " style="color:white">

          <div class=" fit row wrap justify-center">
            <q-responsive :ratio="1" class="containerr">
              <img :src="img[index]" alt="" @click="openDialog" />
            </q-responsive>
          </div>
          <h5>{{ title[index] }}</h5>
          <p> </p>
          <div class="text-h6 " style="color:white">Состав:</div>

          <div class="row">
            {{ structure[index] }}
          </div>
        </q-card-section>
        <q-card-section bg-white v-if="category[index] == `Бургер`">
          <div class="text-h6 " style="color:white">Добавки</div>
          <div class="text">
            <q-checkbox dark v-model="left" color="red" @click="addOptions">{{ store.options[1] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left1" color="red" @click="addOptions">{{ store.options[2] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left2" color="red" @click="addOptions">{{ store.options[3] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left3" color="red" @click="addOptions">{{ store.options[4] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left4" color="red" @click="addOptions">{{ store.options[5] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left5" color="red" @click="addOptions">{{ store.options[6] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left6" color="red" @click="addOptions">{{ store.options[7] }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left7" color="red" @click="addOptions">{{ store.options[8]
            }}</q-checkbox>
          </div>
          <div class="text">
            <q-checkbox dark v-model="left8" color="red" @click="addOptions">{{ store.options[9] }}</q-checkbox>
          </div>
        </q-card-section>
        <q-card-section bg-white v-if="category[index] == `Пицца`">
          <div class="text-h6 " style="color:white">Соус</div>
          <div class="text">
            <q-radio dark v-model="sauce1" val="line" color="red" @click="addsauce">{{
              store.sauce[1]
            }}</q-radio>
          </div>
          <div class="text">
            <q-radio dark v-model="sauce1" val="rectangle" color="red" @click="addsauce">{{
              store.sauce[2]
            }}</q-radio>
          </div>

        </q-card-section>
        <q-card-actions align="right">
          <div class="row fit  justify-between ">

            <div class=" row wrap red justify-between col-9 " v-show="add">
              <div class="col-3">
                <q-btn flat icon="remove" color="white" @click="counterMinus"></q-btn>
              </div>
              <div class="col-2">
                <q-input dense color="red" outlined v-model.number="quantity" label="" type="number" dark />
              </div>
              <div class="col-3">
                <q-btn flat icon="add" color="white" @click="counterPlus"></q-btn>
              </div>
            </div>
            <q-btn label="" icon-right="add" color="red" v-show="!add && !this.options.length" @click="persist"
              class="col-9">{{
                price[index]
              }} Р</q-btn>
            <q-btn label="" icon-right="add" color="red" v-show="!add && this.options.length" @click="persistOptions"
              class="col-9">{{
                sumOption
              }} Р</q-btn>
            <br />

            <q-btn label="" icon-right="shopping_bag" color="red" class="col-2" to="CardApp"></q-btn>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
//import DialogAppVue from "./DialogApp.vue";

import { v4 as uuidv4 } from "uuid";
import { map, filter } from "underscore"
import { useCounterStore } from 'stores/Store';

export default {
  props: [
    "title",
    "price",
    "structure",
    "category",
    "img",
    "index",
    "toogle",
    "option",

  ],
  data() {
    const store = useCounterStore();

    return {
      dialog: false,
      sum: 0,
      card: [],
      menus: [],
      star: false,
      alert: false,
      idfavourites: [],
      add: false,
      quantity: 1,
      left: false,
      left1: false,
      left2: false,
      left3: false,
      left4: false,
      left5: false,
      left6: false,
      left7: false,
      left8: false,
      sauce1: 'line',
      sauce2: false,
      options: "",
      count: 1,
      id: "",
      store,
      localStorage: window.localStorage


    };
  },
  async mounted() {
    if (localStorage.getItem("Card")) {
      try {
        this.card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }

  },
  computed: {
    mapId() {
      return map(this.store.Card, x => x.id)
    },
    filterId() {
      return filter(this.store.Card, x => x.id == this.id)
    },
    sumOption() {
      return Number(this.price[this.index]) + this.optionsPrice
    },
    optionsPrice() {
      let result = []
      if (this.left) {
        result.push(this.store.optionsPrice[1])
      }
      if (this.left1) {
        result.push(this.store.optionsPrice[2])
      }
      if (this.left2) {
        result.push(this.store.optionsPrice[3])
      }
      if (this.left3) {
        result.push(this.store.optionsPrice[4])
      }
      if (this.left4) {
        result.push(this.store.optionsPrice[5])
      }
      if (this.left5) {
        result.push(this.store.optionsPrice[6])
      }
      if (this.left6) {
        result.push(this.store.optionsPrice[7])
      }
      if (this.left7) {
        result.push(this.store.optionsPrice[8])
      }
      if (this.left8) {
        result.push(this.store.optionsPrice[9])
      }
      let sumeResult = 0;

      if (result.length > 0) {
        sumeResult = result.reduce((sum, el) => {
          return sum + el
        })
      }



      return sumeResult;

    }

  },

  methods: {
    openDialog() {
      this.alert = !this.alert
    },
    persist() {
      this.add = true
      // let allCards = []
      // if (localStorage.getItem('Card'))
      //   allCards = JSON.parse(localStorage.getItem('Card'));

      // allCards.push({
      //   id: this.id, title: this.title[this.index], price: this.price[this.index], img: this.Img[this.index], options: this.options, option: this.option, count: this.count
      // });

      // localStorage.setItem("Card", JSON.stringify(allCards));
      this.id = uuidv4()
      this.store.Card.push({
        id: this.id, title: this.title[this.index], price: this.price[this.index], img: this.img[this.index], options: this.options, option: this.option, count: this.count
      })
      this.card = this.store.Card
      // const store = useStorage('cards', allCards)
      // const text = JSON.stringify(store)

    },
    persistOptions() {
      this.add = true
      // let allCards = []
      // if (localStorage.getItem('Card'))
      //   allCards = JSON.parse(localStorage.getItem('Card'));

      // allCards.push({
      //   id: this.id, title: this.title[this.index], price: this.price[this.index], img: this.Img[this.index], options: this.options, option: this.option, count: this.count
      // });

      // localStorage.setItem("Card", JSON.stringify(allCards));
      this.id = uuidv4()
      this.store.Card.push({
        id: this.id, title: this.title[this.index], price: this.sumOption, img: this.img[this.index], options: this.options, option: this.option, count: this.count
      })
      this.card = this.store.Card
      // const store = useStorage('cards', allCards)
      // const text = JSON.stringify(store)

    },

    stars() {
      this.star = !this.star
      this.idfavourites = { id: this.id }
    },
    counterPlus() {
      this.count++
      this.quantity++
      this.store.quantity++

      const a = this.store.Card.findIndex(item => item.id == this.id)
      this.store.Card[a].count++

    },
    counterMinus() {
      this.count--
      this.quantity--
      this.store.quantity--

      const a = this.store.Card.findIndex(item => item.id == this.id)
      this.store.Card[a].count--

    },

    addOptions() {
      if (this.left) {
        this.options = this.store.options[1]
      }
      if (this.left1) {
        this.options = this.options + " " + this.store.options[2]
      }
      if (this.left2) {
        this.options = this.options + " " + this.store.options[3]
      }
      if (this.left3) {
        this.options = this.options + " " + this.store.options[4]
      }
      if (this.left4) {
        this.options = this.options + " " + this.store.options[5]
      }
      if (this.left5) {
        this.options = this.options + " " + this.store.options[6]
      }
      if (this.left6) {
        this.options = this.options + " " + this.store.options[7]
      }
      if (this.left7) {
        this.options = this.options + " " + this.store.options[8]
      }
      if (this.left8) {
        this.options = this.options + " " + this.store.options[9]
      }

    },
    addsauce() {
      if (this.sauce1) {
        this.options = this.store.sauce[1]
      }
      if (this.sauce2) {
        this.options = this.store.sauce[2]

      }
    },
    idd() {
      this.id = uuidv4()
    },









  },

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
  border-radius: 5px;
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

.red {
  background-color: red;
}
</style>
