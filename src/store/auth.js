import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  actions: {
    login(email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.$q.notify({ message: "Sign In Success." });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          this.$q.notify({ message: "Sign In Success." });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    logout() {
      firebase.auth().signOut();
      this.$router
        .push("/")
        .then(() => {
          this.$q.notify({ message: "Sign Out Success." });
        })
        .catch((error) => console.log("error", error));
    },
  },
};
