<template>
  <div>
    <div class="q-pa-md">
      <q-toolbar class="bg-white text-black shadow-2 rounded-borders">
        <q-btn
          flat
          toggle-color="yellow"
          icon="house"
          outline="true"
          label="Главная"
          to="/"
        />
        <q-btn
          flat
          icon="percent"
          outline="true"
          label="Акции"
          to="PromotionApp"
        />
        <q-btn
          flat
          icon="lunch_dining"
          outline="true"
          label="Заказ"
          to="OrderApp"
        />
        <q-btn flat icon="more_horiz" outline="true" label="Ещё" to="MoreApp" />
        <q-space />
      </q-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
