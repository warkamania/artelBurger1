<template>
  <q-page>
    <div class="row">
      <div class="col-12 q-pa-xs fix">
        <q-btn-toggle class="col-12" v-model="toogle" text-color="white" size="md" toggle-color="red" :options="[
          { label: 'Доставка', value: 'one' },
          { label: 'Самовывоз', value: 'two' },
          { label: 'В ресторане', value: 'three' },
        ]" />
      </div>
    </div>

    <div class="row fix">
      <div class="col-12 fix">
        <TabsApp :title="parseTitle" :price="parsePrice" :Img="parseImg" :Structure="parseStructure"
          :Category="parseCategory" class="fix" />
      </div>

    </div>



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
      DocumentID: ref(""),
      toogle: ref("one"),
      value: ref(""),


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
    parsePriceSnacks() {
      return _.map(this.filterSnacks, 'price')

    },
    parseStructureSnacks() {
      return _.map(this.filterSnacks, 'structure')

    },
    parseImgSnacks() {
      return _.map(this.filterSnacks, 'img')

    },
    parseTitleSnacks() {
      return _.map(this.filterSnacks, 'title')
    },

    parsedBurgerNew() {
      return _.map(this.menus, 'burgerNew')
    },
    parsedBurgerPop() {
      return _.map(this.menus, 'burgerPop')
    },
    filterCategory() {
      return _.filter(this.menus, ['Category', 'Category'])
    },
    filterBurger() {
      return _.filter(this.menus, ['Category', "Бургер"])
    },
    filterSnacks() {
      return _.filter(this.menus, ['Category', "Закуски"])
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
.fix {
  position: sticky;
  top: 0px;
}
</style>
