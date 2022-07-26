<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-input color="red" dark v-model="searchQuery" filled type="search" hint="Поиск" style="color: white">
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

    };
  },
  mounted() {
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
    persist() {
      this.Card.push({ id: this.id, title: this.title, price: this.price });
      this.saveCard();
    },
    saveCard() {
      const parsed = JSON.stringify(this.Card);
      localStorage.setItem("Card", parsed);
    },
    Search() {

    }
  },

  components: { TabsApp },
};
</script>

<style>
</style>
