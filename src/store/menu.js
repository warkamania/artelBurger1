import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
export default {
  actions: {
    async createNemu({ dispatch, commit }, menu) {
      try {
        const uid = await dispatch("getUid");
        return await firebase.database().ref(`/users/${uid}/Menus`).push(menu);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchMenu({ dispatch, commit }) {
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

        // Initialize Firebase
        const apps = initializeApp(firebaseConfig);
        const uid = await dispatch("getUid");
        const records =
          (await firebase.database().ref(`/Burger`).once("value")).val() || {};
        return Object.keys(records).map((key) => ({
          ...records[key],
          id: key,
          img: key,
          price: key,
          title: key,
        }));
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchMenuById({ dispatch, commit }, id) {
      try {
        const uid = await dispatch("getUid");
        const record =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/Menus`)
              .child(id)
              .once("value")
          ).val() || {};
        return { ...record, id };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
};
