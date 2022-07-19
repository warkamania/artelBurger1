<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-card bg-white>
          <q-card-section>
            <div class="q-pa-md" style="max-width: 400px">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input
                  type="login"
                  filled
                  v-model="name"
                  label="Логин"
                  hint="Имя"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Пожалуйста введите логин',
                  ]"
                />

                <q-input
                  filled
                  type="password"
                  v-model="age"
                  label="Пароль "
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || 'введите пароль',
                  ]"
                />

                <div>
                  <q-btn label="Войти" type="submit" color="red" />
                  <q-btn
                    label="Сбросить"
                    type="reset"
                    color="red"
                    flat
                    class="q-ml-sm"
                  />
                </div>
                <router-link to="RegistrApp">Регистрация</router-link>
              </q-form>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style></style>
