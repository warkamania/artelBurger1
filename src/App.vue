<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

//import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/database";

export default defineComponent({
  name: "App",


});
</script>
