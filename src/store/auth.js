import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
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
        const apps = initializeApp(firebaseConfig);

        const auth = firebase.auth(apps);
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase.database().ref(`/users/${uid}/info`).set({
          bonus: 20,
          name,
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async longout({ commit }) {
      await firebase.auth().signOut();
      commit("clearInfo");
    },
  },
};
