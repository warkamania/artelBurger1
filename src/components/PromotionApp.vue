<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-input color="red" dark standout bottom-slots v-model="text" label="Промокод" counter :readonly="readonly"
          :disable="disable">
          <template v-slot:prepend>
            <q-icon name="local_offer" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>

          <template v-slot:hint>
            <div class="textGradient45">Количество</div>
          </template>
        </q-input>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <PromoPanel :textt="parseTitle" :index=0 />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="textGradient12">Мои бонусы: 00</h4>
      </div>
    </div>
  </q-page>
</template>

<script>

import PromoPanel from "./PromoPanel.vue";
import db from 'src/boot/firebase';
import { map } from 'underscore'
export default {
  data() {
    return {
      text: "",
      promotion: [],

    };
  },
  mounted() {
    db.collection("Promotion").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        const PromotionChange = change.doc.data();

        if (change.type === "added") {
          //console.log("New promo: ", PromotionChange);
          this.Promotion.unshift(PromotionChange);
        }
        if (change.type === "modified") {
          //console.log("Modified promo: ", PromotionChange);
        }
        if (change.type === "removed") {
          //console.log("Removed promo: ", PromotionChange);
        }
      });
    });

  },
  computed: {
    parseTitle() {
      return map(this.promotion, x => x.textPromotion)

    },
  },
  components: { PromoPanel },
};
</script>

<style>
.textGradient12 {
  background-image: linear-gradient(to right, #553c9a 12%, #ee4b2b);
  color: transparent;
  background-clip: text;
}

.textGradient45 {
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
  color: transparent;
  background-clip: text;
}
</style>
