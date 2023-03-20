<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import reactiveStorage from "vue-reactive-storage"

//import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/database";

export default defineComponent(reactiveStorage, {
  "Card": [],
  name: "App",



});
</script>
