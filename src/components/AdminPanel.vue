<template>
  <q-page>
    <q-splitter v-model="splitterModel" horizontal>
      <div class="row q-pa-md">
        <div class="col-12">
          <q-btn color="white" text-color="black" label=" Меню" class="fit" />
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select v-model="Category" :options="options" label="Категории" bg-color="white" color="red" />
          </div>
        </div>
        <div class="q-pa-md col-12" style="max-width: 300px">
          <div class="">
            <q-select v-model="position" :options="options" label="Позиция меню" bg-color="white" color="red" />
          </div>
          <br />
          <q-input v-model="name" label="Наименование" bg-color="white" color="red" />
          <br />
          <q-input v-model="price" label="Цена" icon="currency_ruble" color="red" bg-color="white" type="number" filled
            style="max-width: 200px" />
          <br />
        </div>
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled type="file" hint="Фотография блюда" />
      </div>
      <div class="row justify-between q-pa-md">
        <div class="col-4">
          <q-btn color="white" text-color="black" label=" Сохранить" class="fit" @click="saveMenu" />
        </div>
        <div class="col-4">
          <q-btn color="white" text-color="black" label="Удалить" class="fit" />
        </div>
      </div>
    </q-splitter>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Новости" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor v-model="editor" :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }" />
        </div>
        <br />
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled type="file" hint="Картинка" />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn color="white" text-color="black" label=" Сохранить" class="fit" @click="saveNews" />
      </div>
      <div class="col-4">
        <q-btn color="white" text-color="black" label="Удалить" class="fit" />
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col-12">
        <q-btn color="white" text-color="black" label="Акции" class="fit" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-sm">
          <q-editor v-model="editor" :definitions="{
            bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
          }" />
        </div>
        <br />
        <q-input color="red" bg-color="white" @update:model-value="
          (val) => {
            file = val[0];
          }
        " filled type="file" hint="Картинка" />
      </div>
    </div>
    <div class="row justify-between q-pa-md">
      <div class="col-4">
        <q-btn color="white" text-color="black" label=" Сохранить" class="fit" @click="savePromotion" />
      </div>
      <div class="col-4">
        <q-btn color="white" text-color="black" label="Удалить" class="fit" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref(null),
      name: ref(null),
      price: ref(null),
      position: ref(null),
      options: [],
      menu: ref(null),
      news: ref(null),
      promotion: ref(null),
      Category: ref(null),
      editor: ref(""),
      img: ref(null),
      splitterModel: ref(50),
    };
  },
  methods: {
    async saveMenu() {
      const formData = {
        price: this.price,
        name: this.name,
        Category: this.Category,
        position: this.position,
        img: this.img,
      };
      try {
        await this.$store.dispatch("createNemu", formData);

      } catch (e) {
        throw e;
      }
      console.log("Позиция сохранена ");
    },
    async saveNews() {
      const formData = {
        editor: this.editor,
        img: this.img,

      };
      try {
        await this.$store.dispatch("createNews", formData);

      } catch (e) {
        throw e;
      }
      console.log("Новость сохранена ");
    },
    async savePromotion() {
      const formData = {
        editor: this.editor,
        img: this.img,

      };
      try {
        await this.$store.dispatch("createPromotion", formData);

      } catch (e) {
        throw e;
      }
      console.log("Акция сохранена сохранена ");
    },
  },
  removeMenu() { },
  removeNews() { },
  removePromotion() { }
}


</script>


<style>
</style>
