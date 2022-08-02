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

  mounted() {
    const firebaseConfig = {
      apiKey: "AIzaSyAdNAnCas-BuRdLEZhG1mq2wzR9DSnT8Yk",
      authDomain: "artelburger-240ca.firebaseapp.com",
      databaseURL: "https://artelburger-240ca-default-rtdb.firebaseio.com",
      projectId: "artelburger-240ca",
      storageBucket: "artelburger-240ca.appspot.com",
      messagingSenderId: "653115872239",
      appId: "1:653115872239:web:35246e0b86ef29e2c01c1a",
      measurementId: "G-QG2M3NF22Q",
    };

    // Initialize Firebase




  }
});
</script>
