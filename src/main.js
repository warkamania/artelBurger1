import Vue from "vue";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import "firebase/auth";
import "firebase/database";
Vue.config.productionTip = false;
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
const apps = initializeApp(firebaseConfig);
const analytics = getAnalytics(apps);

const auth = firebase.auth(apps);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
