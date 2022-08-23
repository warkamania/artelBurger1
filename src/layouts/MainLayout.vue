<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-grey-10">
      <q-header class="bg-grey-10">
        <br />
        <div class="row">
          <div class="col-12 row wrap justify-center">
            <img src="logo.png" alt="logo" @click="clickHome" style="overflow: auto width: 140px; height: 120px" />
          </div>
        </div>
        <div class="row wrap justify-end items-end content-end">
          <div class="col-2">
            <q-btn size="md" flat icon="shopping_bag" to="CardApp" style="overflow: auto">
              <q-badge color="red" floating rounded>2</q-badge>
            </q-btn>
          </div>
        </div>
      </q-header>
      <br />
      <slot>
        <q-footer class="bg-grey-10">
          <div class="row full-width">
            <MenuApp class="col-12 self-center" />
          </div>
        </q-footer>
      </slot>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuApp from "src/components/MenuApp.vue";

export default defineComponent({
  name: "MainLayout",
  components: { MenuApp },
  setup() {
    return {};
  },
  methods: {
    clickHome() {
      this.$router.push("/");
    },
  },
});
</script>
<style lang="sass" scoped></style>
