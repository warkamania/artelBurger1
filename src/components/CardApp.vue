<template>
  <q-page>
    <div class="q-pa-md row items-start">
      <div class="col-12">
        <q-intersection v-for="index in 2" :key="index" once transition="scale">
          <q-card class="my-card bg-black">
            <div class="row">
              <div class="col-10 text-white text-h6">{{ index }}</div>
              <div col-2>
                <q-btn flat icon="close" class="items-end" color="white"></q-btn>
              </div>
            </div>

            <q-card-section>
              <div class="row">
                <div class="col-4">
                  <img src="burger.jpg" class="" alt="" />
                </div>
                <div class="col-8 text-white text-h6">Бурый медведь</div>
              </div>
              <div class="row">
                <div class="col-2">
                  <q-btn flat icon="remove" color="white"></q-btn>
                </div>
                <div class="col-2">
                  <q-input dense dark color="red" outlined v-model="quantity" label="" type="number" />
                </div>
                <div class="col-2">
                  <q-btn flat icon="add" color="white"></q-btn>
                </div>
                <div class="col-3 text-white text-h6">Цена:</div>
                <div class="col-3 price">440 р</div>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>

    <div class="fit row wrap items-end content-end justify-end">
      <div class="col-9" style="color: white; font-size: 25px">
        Стоимость заказ:
      </div>
      <div class="col-3 price">880 р</div>
    </div>
    <div class="fit row wrap items-end content-end justify-end">
      <div class="col-9 textGradient12" style="font-size: 22px">
        начислим бонусов:
      </div>
      <div class="col-3 textGradient12" style="font-size: 22px">+ 10</div>
    </div>
    <br />

    <div class="fit row wrap justify-center items-end self-end">
      <q-btn color="red" @click="alert = true">Оформить заказ</q-btn>
    </div>
    <q-dialog v-model="alert">
      <div class="row">
        <div class="col-12">
          <q-card>
            <q-card-section class="bg-black">
              <q-input dark standout bottom-slots v-model="adres" label="Адрес доставки" counter :readonly="readonly"
                :disable="disable" color="red">
                <template v-slot:prepend>
                  <q-icon name="place" />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                </template>
              </q-input>
              <br />
              <q-input type="tel" dark standout bottom-slots v-model="tel" label="Номер телефона" counter
                :readonly="readonly" :disable="disable" color="red">
                <template v-slot:prepend>
                  <q-icon name="phone" />
                </template>
              </q-input>
              <q-select dark v-model="payment" :options="options" label="Способ оплаты" color="red" />
              <br />
              <div class="fit row wrap justify-center items-end self-end">
                <q-btn color="red" @click="persist">Отправить</q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-dialog>
    <q-dialog v-model="Order">
      <div class="row">
        <div class="col-12">
          <q-card>
            <q-card-section class="bg-black">
              <img src="check_circle_outline_black_48dp.svg" alt="" class="fit row justify-center" />
              <h5 style="color: white">Ваш заказ №{{ numberOrder }} принят</h5>
              {{ numberOrder }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();

    return {
      alert: ref(false),
      payment: ref(""),
      options: ["Онлайн", "Картой при получении", "Наличными при получении"],
      Order: ref(false),
      tel: ref(""),
      adres: ref(""),
      menu: ref([]),
      quantity: ref(Number),
      number: ref(0),


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
    this.menu = await this.$store.dispatch('fetchMenu')
    //const categoires = await this.$store.dispatch('fetchMenu')

  },
  computed: {
    numberOrder() {

      const numb = this.number + 1

      return numb
    }
  },
  methods: {
    CounterPlus() { },
    CounterMinus() { },
    OpdenOrder() {

    },
    persist() {
      this.Card.push({ tel: this.tel, adres: this.adres, payment: this.payment, quantity: this.quantity, numberOrder: this.numberOrder });
      this.saveCard();
      this.Order = true;
      this.alert = false;
      setTimeout(() => {
        this.deleteCard()
      }, 10000);

    },
    saveCard() {
      const parsed = JSON.stringify(this.Card);
      localStorage.setItem("Card", parsed);

    },
    deleteCard() {
      const parsed = JSON.stringify(this.Card)
      localStorage.clear("Card", parsed)
    }
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
<style scoped>
.price {
  color: red;
  font-size: 25px;
}

.textGradient12 {
  background-image: linear-gradient(to right, #553c9a 12%, #ee4b2b);
  color: transparent;
  background-clip: text;
}

img {
  width: 90px;
  height: 100px;
}
</style>
