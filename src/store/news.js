import firebase from "firebase/app";
import "firebase/database";

export default {
  actions: {
    async createNews({ dispatch, commit }, menu) {
      try {
        const uid = await dispatch("getUid");
        return await firebase.database().ref(`/users/${uid}/Menus`).push(menu);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchNews({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const records =
          (
            await firebase.database().ref(`/users/${uid}/Menus`).once("value")
          ).val() || {};
        return Object.keys(records).map((key) => ({
          ...records[key],
          id: key,
        }));
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async fetchNewsById({ dispatch, commit }, id) {
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
