<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-input color="red" dark v-model="searchQuery" filled type="search" style="color: white" placeholder="Поиск">
          <template v-slot:append>
            <q-icon name="search" style="color: white" />
          </template>
        </q-input>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12">
        <TabsApp :title="parseTitle" :price="parsePrice" :Img="parseImg" :Structure="parseStructure"
          :Category="parseCategory" />
      </div>
    </div>
    <div style="color: white"></div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import TabsApp from "src/components/TabsApp.vue";
import db from 'src/boot/firebase';
import _ from "lodash"
export default {
  setup() {
    return {
      searchQuery: ref(""),
      id: ref(""),
      title: ref(""),
      price: ref(""),
      sum: ref(0),
      Card: ref([]),
      selectedSort: ref(""),
      menus: ref([]),
      img: ref(""),
      Category: ref(null),
      Structure: ref(""),


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
    db.collection("Burger").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const burgerChange = change.doc.data();

        if (change.type === "added") {
          console.log("New burger: ", burgerChange);
          this.menus.unshift(burgerChange);
        }
        if (change.type === "modified") {
          console.log("Modified burger: ", burgerChange);
        }
        if (change.type === "removed") {
          console.log("Removed burger: ", burgerChange);
        }
      });
    });
  },
  computed: {
    sortedMenus() {
      return [...this.menus].sort((menu1, menu2) => menu1[this.selectedSort]?.localeCompare(menu2[this.selectedSort]))
    },
    sortedAndSearchedMenus() {
      return this.sortedMenus.filter(menu => menu.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    parseTitle() {
      return _.map(this.menus, 'title')

    },
    parsePrice() {
      return _.map(this.menus, 'price')

    },
    parseStructure() {
      return _.map(this.menus, 'structure')

    },
    parseImg() {
      return _.map(this.menus, 'img')

    },
    parseCategory() {
      return _.map(this.menus, 'Category')

    },
    parsedUidDoc() {
      return _.map(this.menus, 'UidDoc')
    },
    parsedBurgerNew() {
      return _.map(this.menus, 'burgerNew')
    },
    parsedBurgerPop() {
      return _.map(this.menus, 'burgerPop')
    },
    filterCategory() {
      return _.filter(this.menus, { "Category": "Category" })
    },
    filterBurger() {
      return _.find(this.menus, ['Category', "Бургер"])
    },
    filterSnacks() {
      return _.find(this.menus, ['Category', "Закуски"])
    },




  },
  methods: {
    persist() {
      this.Card.push({ id: this.id, title: this.title, price: this.price });
      this.saveCard();
    },
    saveCard() {
      const parsed = JSON.stringify(this.Card);
      localStorage.setItem("Card", parsed);
    },
    getId(id) {
      return db.collection('Burger').doc(id).get()
    }

  },

  components: { TabsApp },
};
</script>

<style>
</style>
