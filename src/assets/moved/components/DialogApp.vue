<template>
  <div class="q-pa-md q-gutter-sm ">
    <q-dialog bg-white v-model="alert">
      <q-card class="bg-white">
        <q-card-section bg-white>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-white" style="color: white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      alert: ref(false),
    };
  },
};
</script>
<style scoped>
bgr {
  background: white;
}
</style>
