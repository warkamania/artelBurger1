<template>
  <q-page>
    <div class="q-pa-md row items-start">
      <div class="col-12" id="id">
        <q-intersection v-for="index in Card.length" :key="index" once transition="scale">
          <q-card class="my-card bg-black" v-show="Open">
            <div class="row">
              <div class="col-10 text-white text-h6">{{ index }}</div>
              <div col-2>
                <q-btn flat icon="close" class="items-end" color="white" @click="deleteCard"></q-btn>
              </div>
            </div>

            <q-card-section>
              <div class="row">
                <div class="col-4">
                  <img :src="parseImg" class="" alt="" />
                </div>
                <div class="col-8 text-white text-h6">{{ parseTitle }}</div>
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
                <div class="col-3 price">{{ parsePrice * quantitys }} р</div>
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
              <h5 style="color: white">Ваш заказ №{{ numberOrder }} принят</h5>

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
import db from 'src/boot/firebase';
import { useStore } from 'vuex'
import axios from 'axios';
import { useCounterStore } from 'stores/Store';

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
      Card: ref([]),
      date: ref(Date),
      store,
      incrementCount,
      decrementCount
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
    this.store.summa = this.sum


  },
  updated() {
    if (localStorage.getItem("Card")) {
      try {
        this.Card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
      }
    }
    this.store.summa = this.sum
  },
  watch: {
    sum(){
      this.store.summa = this.sum
    }
  },
  computed: {
    numberOrder() {

      const numb = this.number.length + 1

      return numb
    },
    parseTitle() {
      return this.Card.length > 0 ? this.Card[0].title : "";
    },
    parseImg() {
      return this.Card.length > 0 ? this.Card[0].img : "";
    },
    parsePrice() {
      return Math.floor(this.Card.length > 0 ? this.Card[0].price : "");
    },
    DataNow() {
      return new Date().toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' });
    },
    Bonus() {
      return Math.round((this.parsePrice * this.Card.length) * 0.03)
    },
    quantitys() {
      return this.store.quantity
    },
    adds() {
      return this.Card.length > 0 ? this.Card.options : "";
    },
    option() {
      return this.Card.length > 0 ? this.Card[0].option : "";
    },
    sum(){
      return this.parsePrice * this.Card.length * this.quantitys
    },


  },
  methods: {
    Close() {
      this.Open = false
    },
    CounterPlus() {
      this.incrementCount
    },
    CounterMinus() {

      this.decrementCount
      if (this.quantitys == 0) {
        this.deleteCard()
      }
    },
    OpdenOrder() {

    },
    persist() {
      this.Card.push({ tel: this.tel, adres: this.adres, payment: this.payment, quantity: this.quantity, numberOrder: this.numberOrder, options: this.adds });
      this.saveCard();

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
      this.Card = []
      this.Open = false
    },
    async addCard() {

      let newCurd = {
        adres: this.adres,
        count: this.quantity,
        payment: this.payment,
        price: this.price,
        tel: this.tel,
        title: this.parseTitle,
        date: this.DataNow,
        option: this.option,
        options: this.adds
      };

      const mailBody = "Наименование: " + this.parseTitle + "   Колличество: " + this.quantity + "   Оплата: " + this.payment + "    Адрес: " + this.adres + "   Телефон: " + this.tel + "   Сумма: " + this.price + "  Дата" + this.DataNow
      let data = { to: "warkamania5@yandex.ru", subject: "Доставка", text: mailBody }
      let res = await axios.post('http://localhost:3000/send-email', data)
      let data1 = res.data1
      console.log(data1)

      db.collection("Card")
        .add(newCurd)
        .then(docRef => {
          console.log("Document written with ID:", docRef.id);
        })
        .catch(error => {
          console.error("Ошибка добавления: ", error);
        });



      this.deleteCard()



      this.newCurdContent = "";
      console.log("Корзина  сохранена");
      this.Order = true;
      this.alert = false;
    },
    inddex() {

      Console.log(this.Card.length[-1])

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
