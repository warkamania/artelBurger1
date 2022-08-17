<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-intersection v-for="index in 1" :key="index" once transition="scale">
      <q-card class="my-card bg-black text-white" @click="!dialog" v-model="id">
        <q-btn v-show="!star" @click="stars" flat icon="star_border "
          class="fit row wrap justify-end items-end content-end"></q-btn>
        <q-btn v-show="star" @click="stars" flat icon="star " class="fit row wrap justify-end items-end content-end">
        </q-btn>
        <q-card-section>
          <q-responsive :ratio="1">
            <img :src="Img[index]" alt="" class="img" @click="OpenDialog" />
          </q-responsive>

          <span class="span-burger">{{ title[index] }}</span>
          <br />
          <div class="fit row wrap justify-between">
            <div class="col-6 price" style="overflow: auto">{{ price[index] }} Р</div>
            <div class="col-6" style="overflow: auto">
              <q-btn flat icon="add_box" @click="persist"></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>
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
      idfavourites: ref([])


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
      this.id = uuidv4();
      this.Card.push({ id: this.id, title: this.title, price: this.price, });
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




  },
  components: {},
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

.textGradient18 {
  background-image: linear-gradient(to right, #553c9a 18%, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
