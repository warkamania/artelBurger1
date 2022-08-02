<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-card bg-white>
          <q-card-section>
            <div class="q-pa-md" style="max-width: 400px">
              <q-form @submit="submitHandler" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="name" label="Имя" hint="Имя или псевдоним" lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Введите логин']" />

                <q-input filled type="email" v-model="email" label="Электронная почта" lazy-rules :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Пожалуйста введите адрес электронной почты',
                ]" />
                <q-input filled type="password" v-model="password" label="Пароль" hint="Пароль" lazy-rules :rules="[
                  (val) => (val && val.length >= 6) || 'Минимальная длинна 6 символов',
                ]" />

                <q-toggle v-model="accept" label="Я принимаю пользовательское соглашение" />

                <div>
                  <q-btn @submit="submitHandler" label="Зарегистрироваться " type="submit" color="red" />
                </div>
              </q-form>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    >
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const email = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      name,
      email,
      accept,
      password,
    };
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,

      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (e) {
        throw e;
      }
      console.log("Регистрация");
    },
  },
};
</script>

<style>
</style>
