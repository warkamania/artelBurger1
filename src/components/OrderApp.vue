<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-input
          color="red"
          dark
          v-model="search"
          filled
          type="search"
          hint="Поиск"
          style="color: white"
        >
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
    <p>Моё имя <input v-model="id" /> и мне <input v-model="title" /> лет.</p>
    <button @click="persist">Сохранить</button>
  </q-page>
</template>

<script>
import { ref } from "vue";
import TabsApp from "src/components/TabsApp.vue";
export default {
  setup() {
    return {
      search: ref(""),
      id: ref(""),
      title: ref(""),
      price: ref(0),
      sum: ref(0),
      Card: ref([]),
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
  methods: {
    persist() {
      this.Card.push(this.id, this.title);
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

<style></style>
