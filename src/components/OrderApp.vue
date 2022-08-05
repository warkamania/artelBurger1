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
        <TabsApp />
      </div>
    </div>

  </q-page>
</template>

<script>
import { ref } from "vue";
import TabsApp from "src/components/TabsApp.vue";
import db from 'src/boot/firebase';
export default {
  setup() {
    return {
      searchQuery: ref(""),
      id: ref(""),
      title: ref(""),
      price: ref(0),
      sum: ref(0),
      Card: ref([]),
      selectedSort: ref(""),
      menus: ref([]),

    };
  },
  async mounted() {
    if (localStorage.getItem("Card")) {
      try {
        this.Card = JSON.parse(localStorage.getItem("Card"));
      } catch (e) {
        localStorage.removeItem("Card");
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
    }
  },
  computed: {
    sortedMenus() {
      return [...this.menus].sort((menu1, menu2) => menu1[this.selectedSort]?.localeCompare(menu2[this.selectedSort]))
    },
    sortedAndSearchedMenus() {
      return this.sortedMenus.filter(menu => menu.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }

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

  },

  components: { TabsApp },
};
</script>

<style>
</style>
