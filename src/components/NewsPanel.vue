<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :navigation-position="navPos"
      navigation
      padding
      height="200px"
      class="bg-white text-black rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ textt }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    textt: String,
  },
  setup() {
    return {
      navPos: ref("bottom"),
      navigationPositions: [{ value: "bottom", label: "bottom (default)" }],

      slide: ref("style"),
      lorem: "НОВОСТИ",
    };
  },
};
</script>
