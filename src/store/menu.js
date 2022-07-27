import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default {
  actions: {
    async createNemu({ dispatch, commit }, menu) {
      try {
        const uid = await dispatch("getUid");
        return await firebase.database().ref(`/Burger/`).push(menu);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchMenu({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const records =
          (await firebase.database().ref(`/Burger/`).once("value")).val() || {};
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
