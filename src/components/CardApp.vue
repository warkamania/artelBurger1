<!-- eslint-disable vue/no-deprecated-filter -->
<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template>
  <q-page>
    <div class="q-pa-md row items-start">
      <div class="col-12" id="id">
        <q-intersection v-for="card, index in cards" :key="card" once transition="scale">
          <q-card class="my-card bg-black" v-show="open">
            <div class="row">

              <div class="col-10 text-white text-h6">{{ index + 1 }}</div>

              <div col-2>
                <q-btn flat icon="close" class="items-end" color="white" @click="deleteCard(index)"></q-btn>
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
                  <q-btn flat icon="remove" color="white" @click="CounterMinus(index)"></q-btn>
                </div>
                <div class="col-2">
                  <q-input dense dark color="red" outlined v-model="mapCount[index]" type="number"
                    class="fit row wrap justify-center" />
                </div>
                <div class="col-2">
                  <q-btn flat icon="add" color="white" @click="CounterPlus(index)"></q-btn>
                </div>
                <div class="col-3 text-white text-h6">Цена:</div>
                <div class="col-3 price">{{ mapPrice[index] * mapCount[index] }} р</div>
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

      <div class="col-3 price">{{ totalPrice }} р </div>
    </div>
    <div class="fit row wrap items-end content-end justify-end">
      <div class="col-9 textGradient12" style="font-size: 22px">
        начислим бонусов:
      </div>
      <div class="col-3 textGradient12" style="font-size: 22px">+ {{ bonus }}</div>
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
                <q-btn color="red" @click="addCard(), paymentRendered()">Оплатить</q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-dialog>
    <q-dialog v-model="pay">
      <div id="payment-form"></div>
    </q-dialog>
    <q-dialog v-model="order">
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
//import { render } from "vue";
import db from 'src/boot/firebase';
import axios from 'axios';
import { useCounterStore } from 'stores/Store';
import { map } from "underscore"
//import { v4 as uuidv4 } from 'uuid'


export default {
  data() {
    const store = useCounterStore();
    const incrementCount = () => store.increment()
    const decrementCount = () => store.dicrement()

    return {
      alert: false,
      payment: "",
      options: ["Онлайн", "Картой при получении", "Наличными при получении"],
      order: false,
      tel: "",
      adres: "",
      menu: [],
      count: null,
      number: 0,
      title: "",
      price: null,
      id: null,
      quantity: 1,
      open: true,
      cards: [],
      date: Date(),
      pay: false,
      result: [],
      confrimm: null,
      confrimToken: null,
      url: "",

      store,
      incrementCount,
      decrementCount
    };
  },
  async mounted() {
    this.cards = this.store.Card
    this.store.summa = this.totalPrice
    localStorage.setItem("Card", JSON.stringify(this.cards));

  },
  updated() {

    this.cards = JSON.parse(localStorage.getItem("Card"));

    this.store.summa = this.totalPrice
  },
  watch: {
    sum1() {
      this.store.summa = this.totalPrice
    }
  },
  computed: {
    numberOrder() {

      const numb = this.number.length + 1

      return numb
    },
    parseTitle() {
      return this.cards.length > 0 ? this.cards[0].title : "";
    },
    parseImg() {
      return this.cards.length > 0 ? this.cards[0].img : "";
    },

    dataNow() {
      return new Date().toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
    },
    bonus() {
      return Math.round(this.totalPrice * 0.03)
    },
    quantitys() {
      return this.store.quantity
    },
    adds() {
      return this.cards.length > 0 ? this.cards.options : "";

    },
    option() {
      return this.cards.length > 0 ? this.cards[0].option : "";
    },
    sum() {
      return this.mapPrice[0] * this.cards.length * this.quantitys
    },
    totalPrice() {
      let result = []
      if (this.cards.length) {
        for (let index in this.mapCount) {
          result.push(this.mapPrice[index] * this.mapCount[index])

        }


        result = result.reduce((sum, el) => {
          return sum + el
        })
        return result;
      } else {
        return 0
      }
    },


    mapTitles() {
      return map(this.cards, x => x.title)
    },
    mapPrice() {
      return map(this.cards, x => x.price)
    },
    mapImg() {
      return map(this.cards, x => x.img)
    },
    mapId() {
      return map(this.cards, x => x.id)
    },
    mapCount() {
      return map(this.cards, x => x.count)
    },



  },



  methods: {
    close() {
      this.open = false
    },
    counterPlus(i) {
      this.store.quantity++
      this.store.Card[i].count++
    },
    counterMinus(i) {

      this.store.quantity--
      this.store.Card[i].count--
      if (this.quantitys == 0) {
        deleteCard(i)
      }
    },

    persist() {
      this.cards.push({ tel: this.tel, adres: this.adres, payment: this.payment, quantity: this.quantity, numberOrder: this.numberOrder, options: this.adds });
      this.saveCard();

      setTimeout(() => {
        this.deleteCard()
      }, 10000);

    },
    saveCard() {
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem("Card", parsed);


    },
    deleteCard(i) {
      this.cards.splice(i, 1)

    },
    async addCard() {

      let newCurd = {
        adres: this.adres,
        count: this.quantity,
        payment: this.payment,
        price: this.sum,
        tel: this.tel,
        title: this.parseTitle,
        date: this.dataNow,
        option: this.option,
        options: this.adds
      };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
      const cross_domain_flag = true

      const mailBody = "Наименование: " + this.parseTitle + ",   Колличество:  " + this.quantity +
        "\nОплата:  " + this.payment + ",   Сумма:  " + this.sum + "\n Адрес:  " + this.adres + ",   Телефон:   " + this.tel + ",   Дата:   " + this.dataNow
      let data = { to: "warkamania5@yandex.ru", subject: "Доставка из мобильного приложения", body: mailBody }
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
      // this.order = true;
      this.alert = false;
    },
    paymentt() {
      const checkout = YooMoneyCheckout(317549);
      checkout.tokenize({
        number: "4793128161644804",
        cvc: "333",
        month: "01",
        year: "30"
      }).then(response => {
        if (response.status === 'success') {
          const { paymentToken } = response.data.response;
          this.token = paymentToken
          console.log(paymentToken)
          // eyJlbmNyeXB0ZWRNZXNzYWdlIjoiWlc...
          return paymentToken;

        }


      });

    },
    paymentRendered() {
      this.alert = false;
      this.pay = true;
      this.confirmation()
      setTimeout(() => {
        const checkout = new window.YooMoneyCheckoutWidget({
          confirmation_token: this.confrimToken, //Токен, который перед проведением оплаты нужно получить от ЮKassa
          return_url: 'https://artel5-9ggd.vercel.app/#/CardApp', //Ссылка на страницу завершения оплаты
          error_callback: function (error) {
            console.log(error)
          }
        });


        //Отображение платежной формы в контейнере
        checkout.render('payment-form')
      }, 3000)



    },

    confirmation() {
      const cross_domain_flag = true
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          'Access-Control-Allow-Credentials': true,
          crossDomain: cross_domain_flag,

        },

      }

      const data = {
        "amount": {
          "value": this.totalPrice,
          "currency": "RUB"
        },
      }
      const token = axios.post("http://80.240.250.157:1728/pay", data, config,
      ).then((response) => {
        this.confrimToken = response.data
        console.log(this.confrimToken)
      }).catch((error) => {
        console.log(error);
      })
      console.log(token)
    },




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
