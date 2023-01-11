<template>
  <div class="q-pa-md">
    <q-carousel v-model="slide" swipeable animated :navigation-position="navPos" navigation padding height="500px"
      class="bg-white text-black rounded-borders">
      <q-carousel-slide name="style" class="column no-wrap flex-center row">
        <img src="5.png" alt="" class="col-12">
        <div class="absolute-bottom custom-caption">
          <center>
            <div class="text-h5">{{ textt[0] }}</div>
          </center>

        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center row">
        <img src="10.jpg" alt="" class="col-12">
        <div class="absolute-bottom custom-caption">
          <center>
            <div class="text-h5">
              {{ textt[1] }}
            </div>
          </center>

        </div>

      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt[2] }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt[3] }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import db from 'src/boot/firebase';
export default {
  props: {
    textt: String,
    img: String,
    index: Number,
  },
  setup() {
    return {
      navPos: ref("bottom"),
      navigationPositions: [{ value: "bottom", label: "bottom (default)" }],

      slide: ref("style"),
      lorem: "НОВОСТИ",
      News: ref([])
    };

  },
  mounted() {
    db.collection("News").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const burgerChange = change.doc.data();

        if (change.type === "added") {
          console.log("New News: ", burgerChange);
          this.News.unshift(burgerChange);
        }
        if (change.type === "modified") {
          console.log("Modified News: ", burgerChange);
        }
        if (change.type === "removed") {
          console.log("Removed News: ", burgerChange);
        }
      });
    });

  },
};
</script>
