<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template>
  <q-page>
    <div class="q-pa-md row items-start">
      <div class="col-12" id="id">
        <q-intersection v-for="Card, index in Cards" :key="Card" once transition="scale">
          <q-card class="my-card bg-black" v-show="Open">
            <div class="row">
              <div class="col-10 text-white text-h6">{{ index + 1 }}</div>
              <div col-2>
                <q-btn flat icon="close" class="items-end" color="white" @click="deleteCard"></q-btn>
              </div>
            </div>

            <q-card-section>
              <div class="row">
                <div class="col-4">
                  <img :src="mapImg[index]" class="" alt="" />
                </div>
                <div class="col-8 text-white text-h6">{{ mapTitles[index] }}</div>
              </div>
              <div class="row">
                <div class="col-2">
                  <q-btn flat icon="remove" color="white" @click="CounterMinus"></q-btn>
                </div>
                <div class="col-2">
                  <q-input dense dark color="red" outlined v-model="quantitys" type="number"
                    class="fit row wrap justify-center" />
                </div>
                <div class="col-2">
                  <q-btn flat icon="add" color="white" @click="CounterPlus"></q-btn>
                </div>
                <div class="col-3 text-white text-h6">Цена:</div>
                <div class="col-3 price">{{ mapPrice[index] * quantitys }} р</div>
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
      <div class="col-3 price">{{ sum }} р</div>
    </div>
    <div class="fit row wrap items-end content-end justify-end">
      <div class="col-9 textGradient12" style="font-size: 22px">
        начислим бонусов:
      </div>
      <div class="col-3 textGradient12" style="font-size: 22px">+ {{ Bonus }}</div>
    </div>
    <br />

    <div class="fit row wrap justify-center items-end self-end">
      <q-btn color="red" @click="alert = true">Оформить заказ</q-btn>
    </div>
    ``
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
                <q-btn color="red" @click="addCard">Отправить</q-btn>
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
              <h5 style="color: white">Ваш заказ принят</h5>

            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import db from 'src/boot/firebase';
import axios from 'axios';
import { useCounterStore } from 'stores/Store';
import { } from "qs"
import _ from "lodash"

export default {
  setup() {
    const store = useCounterStore();
    const incrementCount = () => store.increment()
    const decrementCount = () => store.dicrement()

    return {
      alert: ref(false),
      payment: ref(""),
      options: ["Онлайн", "Картой при получении", "Наличными при получении"],
      Order: ref(false),
      tel: ref(""),
      adres: ref(""),
      menu: ref([]),
      count: ref(null),
      number: ref(0),
      title: ref(""),
      price: ref(null),
      id: ref(null),
      quantity: ref(1),
      Open: ref(true),
      Cards: ref([]),
      date: ref(Date),
      store,
      incrementCount,
      decrementCount
    };
  },
  async mounted() {
    if (localStorage.getItem("Card")) {
      try {
        this.Cards = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }
    this.store.summa = this.sum


  },
  updated() {
    if (localStorage.getItem("Card")) {
      try {
        this.Cards = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }
    this.store.summa = this.sum
  },
  watch: {
    sum1() {
      this.store.summa = this.sum
    }
  },
  computed: {
    numberOrder() {

      const numb = this.number.length + 1

      return numb
    },
    parseTitle() {
      return this.Cards.length > 0 ? this.Cards[0].title : "";
    },
    parseImg() {
      return this.Cards.length > 0 ? this.Cards[0].img : "";
    },
    parsePrice() {
      return Math.floor(this.Cards.length > 0 ? this.Cards[0].price : "");
    },
    DataNow() {
      return new Date().toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
    },
    Bonus() {
      return Math.round((this.parsePrice * this.Cards.length) * 0.03)
    },
    quantitys() {
      return this.store.quantity
    },
    adds() {
      return this.Cards.length > 0 ? this.Cards.options : "";

    },
    option() {
      return this.Cards.length > 0 ? this.Cards[0].option : "";
    },
    sum() {
      return Math.floor(this.mapPrice[1] * this.Cards.length * this.quantitys)
    },


    indexx() {
      for (const index = 0; this.Cards[index].length > 5; index++) {
        console.log(index)
      }
      return this.indexx

    },
    mapTitles() {
      return _.map(this.Cards, "title")
    },
    mapPrice() {
      return _.map(this.Cards, "price")
    },
    mapImg() {
      return _.map(this.Cards, "img")
    }

  },



  methods: {
    Close() {
      this.Open = false
    },
    CounterPlus() {
      this.store.quantity++
    },
    CounterMinus() {

      this.store.quantity--
      if (this.quantitys == 0) {
        this.deleteCard()
      }
    },
    OpdenOrder() {

    },
    persist() {
      this.Cards.push({ tel: this.tel, adres: this.adres, payment: this.payment, quantity: this.quantity, numberOrder: this.numberOrder, options: this.adds });
      this.saveCard();

      setTimeout(() => {
        this.deleteCard()
      }, 10000);

    },
    saveCard() {
      const parsed = JSON.stringify(this.Cards);
      localStorage.setItem("Card", parsed);


    },
    deleteCard() {
      const parsed = JSON.stringify(this.Cards)
      localStorage.clear("Card", parsed)
      this.Cards = []
      this.Open = false
    },
    async addCard() {

      let newCurd = {
        adres: this.adres,
        count: this.quantity,
        payment: this.payment,
        price: this.sum,
        tel: this.tel,
        title: this.parseTitle,
        date: this.DataNow,
        option: this.option,
        options: this.adds
      };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const cross_domain_flag = true

      const mailBody = "Наименование: " + this.parseTitle + ",   Колличество:  " + this.quantity +
        "\nОплата:  " + this.payment + ",   Сумма:  " + this.sum + "\n Адрес:  " + this.adres + ",   Телефон:   " + this.tel + ",   Дата:   " + this.DataNow
      let data = { to: "warkamania5@yandex.ru", subject: "Доставка", body: mailBody }
      let res = await axios.post('http://80.240.250.157:1728/send-email', data, {
        crossDomain: cross_domain_flag
      })
      let data1 = res.data1
      console.log(data1)

      // db.collection("Card")
      //   .add(newCurd)
      //   .then(docRef => {
      //     console.log("Document written with ID:", docRef.id);
      //   })
      //   .catch(error => {
      //     console.error("Ошибка добавления: ", error);
      //   });




      this.deleteCard()



      this.newCurdContent = "";
      console.log("Корзина  сохранена");
      this.Order = true;
      this.alert = false;
    },
    idd() {

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
